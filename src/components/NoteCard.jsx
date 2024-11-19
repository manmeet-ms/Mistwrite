'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DeleteOutlineOutlined, LocalFireDepartment, LocalFireDepartmentOutlined, LocalFireDepartmentTwoTone } from '@mui/icons-material';
import parse from 'html-react-parser';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import appwriteNoteService from '../appwrite/config';
import { PackageMinus } from 'lucide-react';

const NoteCard = ({ title, noteId, content, createdAt, onDelete }) => {
    const [tleftString, settleftString] = useState('NaN');
    const formatDate = useCallback((dateString) => {
        return dateString ? `${moment(dateString).format('MMM DD, YYYY')} at ${moment(dateString).format('HH:mm')}` : 'Invalid Date';
    }, []);

    const deleteNoteOperation = async () => {
        if (!noteId) {
            console.error('No noteId provided');
            return;
        }

        try {
            await appwriteNoteService.deleteNote(noteId);
            // Notify parent component to update the notes list
            if (onDelete) {
                onDelete(noteId);
                toast.success(`Deleted ${title}`);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
            toast.error('Failed to delete note');
        }
    };

    const calculateTimeLeft = useCallback((createdDate, burnDate) => {
        const burnDateIntoTime = burnDate.getTime();
        const diffInMs = burnDateIntoTime - Date.now();

        if (diffInMs <= 0) {
            deleteNoteOperation();
            return null;
        }

        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

        return `${hours}h ${minutes}m`;
        // return `${hours}h ${minutes}m ${seconds}s`;
    }, []);

    // Calculate burn time when component mounts and set up interval
    useEffect(() => {
        const noteCreated = new Date(createdAt);
        // Set burn time to 1 hour, 15 minutes after creation
        const [h, m, s, ms] = [24, 60, 60, 1000];
        const noteBurn = new Date(noteCreated.getTime() + h * m * s * ms);

        // Check burn time every second
        const interval = setInterval(() => {
            const timeLeft = calculateTimeLeft(noteCreated, noteBurn);
            settleftString(timeLeft);
            if (!timeLeft) {
                clearInterval(interval);
            }
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [createdAt, calculateTimeLeft]);

    const noteCreated = new Date(createdAt);
    const [h, m, s, ms] = [24, 60, 60, 1000];
    const noteBurn = new Date(noteCreated.getTime() + h * m * s * ms);
    const timeLeft = calculateTimeLeft(noteCreated, noteBurn);

    return (
        <section className="pt-4 pr-2 pl-4 pb-2 h-fit max-h-[400px] overflow-auto  text-card-foreground border-2 backdrop-blur-lg border-card-foreground/10 rounded-xl transition-all duration-500 ease-in-out ">
            {/* <section className=" pt-4 pr-2 pl-4 pb-2 h-fit max-h-[400px] overflow-auto  bg-accent/0 hover:bg-accent/50 border  border-secondary-foreground/20 rounded-xl transition-all duration-500 ease-in-out "> */}
            <div className="space-y-2">
                <div className="flex justify-between">
                    <h4 className="w-20 md:w-24 lg:w-36 text-card-foreground break-words">{title}</h4>
                    {/* <Button variant="icon" className="rounded-xl px-3 relative bottom-1.5 " onClick={deleteNoteOperation}>
                        <DeleteOutlineOutlined sx={{ fontSize: 16 }} className="text-secondary-foreground" />
                    </Button> */}
                    {timeLeft && (
                        <div className="  ">
                            {/* <div className='w-full relative left-4'> */}
                            <span className="">
                                <Badge className="font-[700] text-2xs text-primary bg-primary/15 hover:bg-primary/20 rounded-full py-1 pl-2" variant="secondary">
                                    {/* <Badge className="badgeText text-2xs text-amber-700 bg-amber-400/30 dark:text-amber-500 dark:bg-amber-800/30 rounded-full py-1 pl-2" variant="secondary"> */}
                                    <LocalFireDepartmentOutlined className="mr-0.5 " sx={{ fontSize: 14, strokeWidth: 24 }} />
                                    {tleftString}
                                </Badge>
                            </span>
                        </div>
                    )}
                </div>
                <p className="text-sm text-card-foreground dark:text-card-foreground/70 break-words text-balance">{parse(content)}</p>

                <div className="flex flex-col text-xs text-card-foreground/30 break-all">
                    {/* <span>Created: {formatDate(noteCreated)} </span>
                    <span>Burn: {formatDate(noteBurn)} </span>
                    <span>Now: {moment().format('MMM DD, YYYY HH:mm')} </span> */}
                    <span>Created {moment(noteCreated).fromNow()} </span>
                    {/* <span>Note ID: {noteId} </span> */}
                </div>

                {/* {timeLeft && (
                    <div>
                        <span className="inline-flex gap-1 text-xs">
                            <Badge className="mt-2 mb-1 text-2xs text-xs font-bold text-amber-700 bg-amber-400/30 dark:text-amber-500 dark:bg-amber-800/30 rounded-full py-1 pl-2" variant="secondary">
                                <LocalFireDepartmentOutlined className="mr-0.5" sx={{ fontSize: 14,  strokeWidth: 20 }} />
                                {tleftString}
                            </Badge>
                        </span>
                    </div>
                )} */}
            </div>
            <Toaster />
        </section>
    );
};

export default NoteCard;
