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

function App() {
    const ref = useRef(null);
    const authStatus = useSelector((state) => state.auth.status);
    const [notes, setNotes] = useState([]);
    const fetchNotes = useCallback(async () => {
        try {
            let queryPass = [];
            const fetchedNotes = await appwriteNoteService.getEveryNote(queryPass);
            if (fetchedNotes && fetchedNotes.documents) {
                setNotes(fetchedNotes.documents);
                
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setloading(false);
        }
    }, []);  

useEffect(() => {
  fetchNotes()

//   return () => {
//     second
//   }
// }, [notes]) //adding notes keeps on 'infinitely' rendering 
}, [fetchNotes,setNotes]) 


    //  to overcome network delays when interactive with data from server
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
        // return () => {
        //   second;
        // };
    }, []);
    const userData = useSelector((state) => state.auth.userData);
    const generateTestData = async () => {
        let calc = new Date().getTime() + 12 * 60 * 60 * 1000;
        await appwriteNoteService.createNote({
            title: 'Meeting Prep',
            content: 'Discuss project updates and finalize the roadmap.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'To-Do List',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis modi asperiores quod deserunt! Voluptas, expedita.<br><ol><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li><li>Buy groceries</li><li>Pick up laundry</li><li>Call the plumber</li></ol> ',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Dinner Plans',
            content: 'Book a table at the new <i>Italian</i> restaurant for <b>Saturday night</b>.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Quick Notes',
            content: 'Return library books. Send email to professor. Pay the bills.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Study Checklist',
            content: "Complete the math assignment, revise chemistry notes, and prep for tomorrow's quiz. Don't forget to go over the calculus problems you missed last week. Focus on Chapter 6 and the practice test.",
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Tomorrow’s Focus',
            content: 'Work on the business Work on the business proposal and finalize the marketing plan proposal and finalize the marketing plan.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Self-Reminder',
            content: 'Stay focused today. Small steps lead to big success eventually!',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Daily Inspiration',
            content: '<blockquote>The only limit to our realization of tomorrow is our doubts of today. Keep pushing forward, no matter how challenging things seem. Trust in your efforts, and the results will follow.</blockquote> ',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Today’s Accomplishments',
            content: 'Milk, Eggs, Bread. I’d be interested to know what prompted you to take our conversation to DMs. How can I assist you further? Coffee.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Weekend Plans',
            content: 'Looking forward to a relaxing weekend. Planning to catch up on reading and maybe take a short hike on Sunday morning.',
            userId: userData.$id,
        });
    };

    return !loading ? (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Header />
                <LoadingBar color="#4ade80" ref={ref} />

                {authStatus ? (
                    <>
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
                        <Button onClick={generateTestData}>Generate Test Data</Button>
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
            </ThemeProvider>
        </>
    ) : (
        <Loader />
    );
}

export default App;
