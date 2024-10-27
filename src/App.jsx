import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Masonry from '@mui/lab/Masonry';
import Header from './components/Header/Header';
import Loader from './components/Loader';
import NoteCard from './components/NoteCard';
import AddNote from './pages/AddNote';
import { Query } from 'appwrite';
import { AutoFixHighRounded, AutoFixHighSharp, Cached } from '@mui/icons-material';
import appwriteNoteService from './appwrite/config';
import LoginFormUnit from './components/LoginFormUnit';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
function App() {
    const ref = useRef(null);
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    // Handle authentication
    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, []); // Only run once on mount

    // Memoize fetchNotes function
    const fetchNotes = useCallback(async () => {
        if (!userData?.$id) return; // Guard clause to prevent unnecessary API calls

        try {
            const fetchedNotes = await appwriteNoteService.getEveryNote([Query.equal('userId', userData.$id)]);
            if (fetchedNotes && fetchedNotes.documents) {
                setNotes(fetchedNotes.documents);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }, [userData?.$id]); // Only recreate when userId changes

    // Fetch notes when user data is available
    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]); // Depend on memoized fetchNotes

    const handleNoteDelete = useCallback(
        async (deletedNoteId) => {
            try {
                // Optimistically update UI
                setNotes((prevNotes) => prevNotes.filter((note) => note.$id !== deletedNoteId));

                // Fetch fresh data from server
                await fetchNotes();
            } catch (error) {
                console.error('Error handling note deletion:', error);
                // If there's an error, refresh anyway to ensure UI is in sync
                fetchNotes();
            }
        },
        [fetchNotes],
    );
    const handleNoteCreate = useCallback(
        async (newNote) => {
            try {
                // Optimistically add the new note to the UI
                setNotes((prevNotes) => [newNote, ...prevNotes]);
                // Refresh to get the latest data
                await fetchNotes();
                toast.success('Note created successfully');
            } catch (error) {
                console.error('Error handling note creation:', error);
                fetchNotes();
            }
        },
        [fetchNotes],
    );

    const generateTestData = async () => {
        if (!userData?.$id) return;

        const testNotes = [
            {
                title: `${userData.name} Meeting Prep`,
                content: `${userData.$id} Discuss project updates and finalize the roadmap.`,
            },
            {
                title: `${userData.name} To-Do List`,
                content:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis modi asperiores quod deserunt! Voluptas, expedita.<br><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li> ',
            },
            {
                title: `${userData.name} Study Checklist`,
                content: "Complete the math assignment, revise chemistry notes, and prep for tomorrow's quiz. Don't forget to go over the calculus problems you missed last week. Focus on Chapter 6 and the practice test.",
            },
            {
                title: `${userData.name} Self-Reminder`,
                content: `${userData.$id} Stay focused today. Small steps lead to big success eventually!`,
            },
            {
                title: `${userData.name} Today's Accomplishments`,
                content: `${userData.$id} Milk, Eggs, Bread. I'd be interested to know what prompted you to take our conversation to DMs. How can I assist you further? Coffee.`,
            },
        ];

        for (const note of testNotes) {
            await appwriteNoteService.createNote({
                ...note,
                userId: userData.$id,
            });
        }

        // Refresh notes after generating test data
        fetchNotes();
    };

    if (loading) return <Loader />;

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Header />
            {authStatus ? (
                <>
                    <div className="flex justify-between">
                        <span className="text-xs text-muted-foreground flex flex-col">
                            <span className="text-xl text-primary ">
                                {/* {time = (Date.now())}  add greetings acc to time*/}
                                Welcome
                            </span>
                            {`${userData.name}`}
                        </span>
                      
                      <div className="flex gap-2">
                      <TooltipProvider>
                            <Tooltip>
                                {' '}
                                {/*set tooltip diren to below */}
                                <TooltipTrigger>
                                    {' '}
                                    <Button className="px-0" variant="icon" onClick={generateTestData}>
                                        <AutoFixHighSharp  sx={{fontSize:20,}} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Generate test data</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                {' '}
                                {/*set tooltip diren to below */}
                                <TooltipTrigger>
                                    {' '}
                                    <Button className="px-0 my-2" variant="icon" onClick={fetchNotes}>
                                        <Cached  sx={{fontSize:20,}} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Refresh</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>

                    <div className="transition-all duration-500">
                        <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
                            {notes.map((note) => (
                                <NoteCard key={note.$id} noteId={String(note.$id)} title={note.title} content={note.content} userId={note.userId} createdAt={note.$createdAt} onDelete={handleNoteDelete} />
                            ))}
                        </Masonry>
                    </div>
                    <AddNote onNoteCreate={handleNoteCreate} />
                </>
            ) : (
                <LoginFormUnit />
            )}
        </ThemeProvider>
    );
}

export default App;
