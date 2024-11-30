

import { ThemeProvider } from '@/components/theme-provider';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import appwriteNoteService from '../appwrite/config';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import { Copy } from 'lucide-react';
const ViewNote = () => {
    const params = useParams();
    const [note, setNote] = useState(null);

    const slug_NoteIdReceived = String(params.id);
    console.log(params);
    console.log("slug", slug_NoteIdReceived);
    console.log("params.id", params.id);

    useEffect(() => {
        const displayNote = async () => {
            try {
                const result = await appwriteNoteService.readNote(slug_NoteIdReceived);
                setNote(result);

                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        displayNote();
    }, [params.id]); // Dependency array prevents unnecessary re-renders

 
const copyToClipboard=async ()=>{
    await navigator.clipboard.writeText(note.content).then(() => {
        console.log('Text copied to clipboard', note.content);
        }).catch(err => {
        console.error('Failed to copy: ', err);
        });
};
    return (
        <>
            <ThemeProvider>
                {note && (
                    // Render note details once note is loaded
                    <>
                        <Header pagename={note.title} isNoteView={true} />
                        <section className="text-muted-foreground bg-card-background  overflow-hidden">
                            <div className="container px-5  mx-auto">
                                <div className="flex flex-wrap -m-12">
                                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                                        {/* <span className="inline-block py-1 px-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest">{tleftString}</span> */}
<div className="flex w-full  justify-between items-center ">
                                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-card-foreground mt-4 mb-4">{note.title}</h2>
<Copy sx={{fontSize:20}} onClick={copyToClipboard} className='opacity-0 md:opacity-100' />
</div>
                                        <p className="leading-relaxed mb-8">{parse(note.content)}</p>
                                        {/* <div className="flex items-center justify-between flex-wrap pb-4 mb-4 border-b border-accent  mt-auto w-full">
                                            <Badge className="text-xs text-primary bg-primary/15 hover:bg-primary/20 rounded-full py-1 pl-2" variant="secondary">
                                                <LocalFireDepartmentOutlined className="mr-0.5 " sx={{ fontSize: 14, strokeWidth: 24 }} />
                                                {tleftString}
                                            </Badge>
                                            <div className="flex gap-2">
                                                <Button onCLick={deleteNoteOperation} variant="secondary">
                                                    <DeleteOutline /> Delete Now
                                                </Button>
                                            </div>
                                        </div> */}
                                        {/* <a className="inline-flex items-center">
                                            <Avatar className="h-8 w-8 rounded-lg">
                                                <AvatarImage className="rounded-full" src={userAvatarURL} alt={userFullName} />
                                                <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                            </Avatar>{' '}
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="font-medium text-foreground">Created by {userFullName}</span>
                                                <span className="text-muted-foreground text-xs mt-0.5 capitalize">{moment(noteCreated).fromNow()}</span>
                                            </span>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Add more note details as needed */}
                    </>
                )}

                <BottomToolbar />
            </ThemeProvider>
        </>
    );
};

export default ViewNote;
