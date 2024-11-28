import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Add, AutoFixHighSharp, Cached } from '@mui/icons-material';
import Masonry from '@mui/lab/Masonry';
import { Query } from 'appwrite';
import moment from 'moment';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import appwriteNoteService from './appwrite/config';
import BottomToolbar from './components/BottomToolbar';
import Header from './components/Header/Header';
import Loader from './components/Loader';
import LoginFormUnit from './components/LoginFormUnit';
import NoteCard from './components/NoteCard';
import globalStyle from './conf/globalStyle';
import { login, logout } from './store/authSlice';
import { Link } from 'react-router-dom';
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
        if (!userData?.$id) return; // prevent unnecessary API calls

        try {
            const fetchedNotes = await appwriteNoteService.getEveryNote([Query.equal('userId', userData.$id)]);
            // console.log("loggin this", fetchedNotes.documents[0].$createdAt);
            
            if (fetchedNotes && fetchedNotes.documents) {
                setNotes((fetchedNotes.documents).reverse()); // to sorrt the notes in (latest created) order
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
                title: `1. Meeting Prep`,
                content: `${userData.$id} Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.Discuss project updates and finalize the roadmap.END END END`,
            },
            {
                title: `2. To-Do List`,
                content:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis modi asperiores quod deserunt! Voluptas, expedita.<br><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li> ',
            },
            {
                title: `3. Study Checklist`,
                content: "Complete the math assignment, revise chemistry notes, and prep for tomorrow's quiz. Don't forget to go over the calculus problems you missed last week. Focus on Chapter 6 and the practice test.",
            },
            {
                title: `4. Self-Reminder`,
                content: `${userData.$id} Stay focused today. Small steps lead to big success eventually!`,
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
    const date = new Date();
    const hours = date.getHours();
    let Greet;
     
    if(hours < 12){
            Greet = "Good Morning";
    }else if(hours >= 12 && hours <= 17){
            Greet = "Good Afternoon";
    }else if(hours >= 17 && hours <= 24){
            Greet = "Good Evening";
    }

    if (loading) return <Loader />;

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <Header />
    
            
            {authStatus ? (
                <>
                {/* <LatestUpdatesAsPage/> */}
                <main className=''>
                <section className={`${globalStyle.pageBodyPaddingX}`}>
                    <div className="  flex mb-4 border-b border-primary/20 border-dashed items-center justify-between">
                        <span className=" text-xs flex flex-col gap-0.5">
                            {Greet}, {userData.name}
                            <span className="text-primary font-semibold">{moment().format('LLL')} </span>
                        </span>

                        <div className="flex gap-4 mr-2">
                 
                        <Button className="px-0 my-2 opacity-0" variant="icon" onClick={generateTestData}>
                                            <AutoFixHighSharp sx={{ fontSize: 24 }} />
                                        </Button>
                                        <Button className="px-0 my-2" variant="icon" onClick={fetchNotes}>
                                            <Cached sx={{ fontSize: 24 }} />
                                        </Button>
                
                        </div>
                    </div>

                    <div className="transition-all duration-500">
                        <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
                            {notes.map((note) => (
                                <NoteCard key={note.$id} noteId={String(note.$id)} title={note.title} content={note.content} userId={note.userId} createdAt={note.$createdAt} onDelete={handleNoteDelete} />
                            ))}
                        </Masonry>
                    </div>
                
                </section>
                
                    <BottomToolbar/>
                    </main>
                    </>
            ) : (
                <LoginFormUnit />
            )}

        </ThemeProvider>
    );
}

export default App;
