import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import authService, { AuthService } from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/Header/Header';
import AddNote from './pages/AddNote';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import NoteCard from './components/NoteCard';
import Loader from './components/Loader';
// import { NoteCard } from "../components/index";
import appwriteNoteService from './appwrite/config';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        // queries could be passd in this empty array
        appwriteNoteService.getEveryNote([]).then((reterivedNotes) => {
            if (reterivedNotes) {
                // console.log("reterivedNotes", reterivedNotes.documents);
                setNotes(reterivedNotes.documents); // as it will list of notes as arrays, which will be passed
            }
        });
    }, []);

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
            content: '1. Buy groceries 2. Pick up laundry 3. Call the plumber',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Dinner Plans',
            content: 'Book a table at the new Italian restaurant for Saturday night.',
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
            content: 'Work on the business proposal and finalize the marketing plan.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Self-Reminder',
            content: 'Stay focused today. Small steps lead to big success eventually!',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Daily Inspiration',
            content: 'The only limit to our realization of tomorrow is our doubts of today. Keep pushing forward, no matter how challenging things seem. Trust in your efforts, and the results will follow.',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Quote of the Day',
            content: 'The future depends on what we do in the present. - Gandhi',
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

        await appwriteNoteService.createNote({
            title: 'Inspiration',
            content: 'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
            userId: userData.$id,
        });

        await appwriteNoteService.createNote({
            title: 'Inspiration',
            content: 'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
            userId: userData.$id,
        });
    };

    return !loading ? (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />
                <div className="masonary">
                    {notes.map((notesIdx) => {
                        // console.log(notesIdx);
                        // console.log(notesIdx.title);
                        // console.log(notesIdx.content);
                        // console.log(notesIdx.userId);
                        // console.log(notesIdx.slug);
                        // console.log(notesIdx.$id);
                        // console.log(notesIdx.$createdAt);

                        return <NoteCard key={notesIdx.$id} noteId={String(notesIdx.$id)} title={notesIdx.title} content={notesIdx.content} userID={notesIdx.content} userId={notesIdx.$id} createdAt={notesIdx.$createdAt} />;
                    })}
                </div>
                <AddNote />

                <Button onClick={generateTestData}>Generate Test Data</Button>
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
        <>
            {/* <span class="loader"></span> */}
            <Loader />
        </>
    ); // TODO #assignment: show a loader when loading isnt complete yet
}

export default App;
