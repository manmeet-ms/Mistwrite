import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';

import Masonry from '@mui/lab/Masonry';
import Header from './components/Header/Header';
import Loader from './components/Loader';
import NoteCard from './components/NoteCard';
import AddNote from './pages/AddNote';
// import { NoteCard } from "../components/index";
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import appwriteNoteService from './appwrite/config';
import LoginFormUnit from './components/LoginFormUnit';

import { Query } from 'appwrite';
import { AutoFixHighRounded, Cached, PhotoFilterRounded } from '@mui/icons-material';
import conf from './conf/conf';
import { Loader2, LoaderCircle } from 'lucide-react';

function App() {
    const ref = useRef(null);
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    const [notes, setNotes] = useState([]);

    const [loading, setloading] = useState(true);
    const dispatch = useDispatch(); // for retrieving  relevant data

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    //if we really got current user then dispactch for user-data
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout()); // if we didn't so finally it will logout data alteast we have update state
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                dispatch(logout()); // Logout if authentication fails
            })
            .finally(() => setloading(false));
    }, []);
    const fetchNotes = async () => {
        try {
            // let queryPass = [Query.equal("userId", userData.$id)];
            const fetchedNotes = await appwriteNoteService.getEveryNote([Query.equal('userId', userData.$id)]);
            if (fetchedNotes && fetchedNotes.documents) {
                setNotes(fetchedNotes.documents); // add useeffecthre in func
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setloading(false);
        }
    };
    useEffect(() => {
        fetchNotes();
    }, [setNotes && fetchNotes]);
    // }, []);

    const generateTestData = async () => {
        let calc = new Date().getTime() + 12 * 60 * 60 * 1000;
        await appwriteNoteService.createNote({
            title: `${userData.name} Meeting Prep`,
            content: `${userData.$id} Discuss project updates and finalize the roadmap.`,
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: `${userData.name} To-Do List`,
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis modi asperiores quod deserunt! Voluptas, expedita.<br><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li> ',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: `${userData.name} Dinner Plans`,
            content: `${userData.$id} Book a table at the new <i>Italian</i> restaurant for <b>Saturday night</b>.`,
            userId: userData.$id,
        });

        // await appwriteNoteService.createNote({
        //     title:${userData.name} ` Quick Notes`,
        //     content: `${userData.$id} Return library books. Send email to professor. Pay the bills.`,
        //     userId: userData.$id,
        // });

        await appwriteNoteService.createNote({
            title: `${userData.name} Study Checklist`,
            content: "Complete the math assignment, revise chemistry notes, and prep for tomorrow's quiz. Don't forget to go over the calculus problems you missed last week. Focus on Chapter 6 and the practice test.",
            userId: userData.$id,
        });

        // await appwriteNoteService.createNote({
        //     title:${userData.name} ` Tomorrow’s Focus`,
        //     content: `${userData.$id} Work on the business Work on the business proposal and finalize the marketing plan proposal and finalize the marketing plan.`,
        //     userId: userData.$id,
        // });

        await appwriteNoteService.createNote({
            title: `${userData.name} Self-Reminder`,
            content: `${userData.$id} Stay focused today. Small steps lead to big success eventually!`,
            userId: userData.$id,
        });

        // await appwriteNoteService.createNote({
        //     title:${userData.name} ` Daily Inspiration`,
        //     content: `${userData.$id} <>The only limit to our realization of tomorrow is our doubts of today. Keep pushing forward, no matter how challenging things seem. Trust in your efforts, and the results will follow.</> `,
        //     userId: userData.$id,
        // });

        await appwriteNoteService.createNote({
            title: `${userData.name} Today’s Accomplishments`,
            content: `${userData.$id} Milk, Eggs, Bread. I’d be interested to know what prompted you to take our conversation to DMs. How can I assist you further? Coffee.`,
            userId: userData.$id,
        });

        // await appwriteNoteService.createNote({
        //     title:${userData.name} ` Weekend Plans`,
        //     content: `${userData.$id} Looking forward to a relaxing weekend. Planning to catch up on reading and maybe take a short hike on Sunday morning.`,
        //     userId: userData.$id,
        // });
    };

    return !loading ? (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Header />
 
                {authStatus ? (
                    <>
                    <Cached onClick={fetchNotes}/>
                        <span className="text-xs text-muted-foreground">Logged: {`${userData.name}: ${userData.$id}`}</span>
                        {/* <div className="masonary transition-all duration-500"> */}
                        <div className="transition-all duration-500">
                            <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1}>
                                {notes.map((notesIdx) => {
                                    // console.log(notesIdx);
                                    // console.log(notesIdx.title);
                                    // console.log(notesIdx.content);
                                    // console.log(notesIdx.userId);
                                    // console.log(notesIdx.slug);
                                    // console.log(notesIdx.$id);
                                    // console.log(notesIdx.$createdAt);

                                    return <NoteCard key={notesIdx.$id} noteId={String(notesIdx.$id)} title={notesIdx.title} content={notesIdx.content} userId={notesIdx.userId} createdAt={notesIdx.$createdAt} />;
                                })}
                            </Masonry>
                        </div>
                        <AddNote />

                        {/* <Button onClick={ ()=>{  generateTestData();ref.current.continuousStart()}}>Generate Test Data</Button> */}
                        {/* <Button className="my-6 absolute bottom-20 right-4 " onClick={generateTestData}><AutoFixHighRounded/></Button>
                        <Button className="my-6 absolute bottom-28 right-4 " onClick={generateTestData}><PhotoFilterRounded/></Button> */}
                    </>
                ) : (
                    <LoginFormUnit />
                )}

                {/* <span
        className={`fixed bottom-8 right-4 text-green-950 bg-green-400 rounded-2xl p-4`}
      >
        <Link to='/add-note' className={` flex flex-col items-center font-medium`}>
          <div className="">
            <Add className='' size={20} strokeWidth={2.5} />
          </div>
        </Link>
        
      </span>  */}
                <Button className="my-2 fixed bottom-24 right-4 p-4 py-7 " onClick={generateTestData}>
                    <AutoFixHighRounded />
                </Button>
            </ThemeProvider>
        </>
    ) : (
        <Loader />
    );
}

export default App;
