'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Close, DeleteOutlineOutlined, LocalFireDepartmentOutlined } from '@mui/icons-material';
import parse from 'html-react-parser';
import moment from 'moment';
import React, { useEffect, useCallback } from 'react';
import appwriteNoteService from '../appwrite/config';
import { toast, ToastBar, Toaster } from 'react-hot-toast';

const NoteCard = ({ title, noteId, content, createdAt, onDelete }) => {
    const formatDate = useCallback((dateString) => {
        return dateString ? 
            `${moment(dateString).format('MMM DD, YYYY')} at ${moment(dateString).format('HH:mm')}` 
            : 'Invalid Date';
    }, []);

    const deleteNoteOperation = async () => {
        if (!noteId) {
            console.error('No noteId provided');
            return;
        }

        try {
            await appwriteNoteService.deleteNote(noteId);
            toast.success(`Deleted ${title}`);
            // Notify parent component to update the notes list
            if (onDelete) {
                onDelete(noteId);
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

        return `${hours}h ${minutes}m ${seconds}s`;
    }, []);

    // Calculate burn time when component mounts and set up interval
    useEffect(() => {
        const noteCreated = new Date(createdAt);
        // Set burn time to 1 hour, 15 minutes after creation
        const [h, m, s, ms] = [1, 15, 60, 1000];
        const noteBurn = new Date(noteCreated.getTime() + h * m * s * ms);

        // Check burn time every second
        const interval = setInterval(() => {
            const timeLeft = calculateTimeLeft(noteCreated, noteBurn);
            if (!timeLeft) {
                clearInterval(interval);
            }
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [createdAt, calculateTimeLeft]);

    const noteCreated = new Date(createdAt);
    const [h, m, s, ms] = [1, 15, 60, 1000];
    const noteBurn = new Date(noteCreated.getTime() + h * m * s * ms);
    const timeLeft = calculateTimeLeft(noteCreated, noteBurn);

    return (
        <section className="pt-4 pr-2 pl-4 pb-2 my-2 mx-1 bg-slate-800/50 border border-slate-500/0 rounded-xl">
            <div className="space-y-2">
                <div className="flex justify-between">
                    <h4 className="text-slate-200 break-words truncate">{title}</h4>
                    <Button 
                        variant="ghost" 
                        className="rounded-xl px-3 relative bottom-1.5"
                        onClick={deleteNoteOperation}
                    >
                        <DeleteOutlineOutlined
                            sx={{ fontSize: 16 }}
                            className="text-slate-400"
                        />
                    </Button>
                </div>

                <p className="text-sm text-slate-400 break-words text-balance">
                    {parse(content)}
                </p>

                <div className="flex flex-col text-xs text-slate-600 break-all">
                    <span>Created: {formatDate(noteCreated)} </span>
                    <span>Burn: {formatDate(noteBurn)} </span>
                    <span>Now: {moment().format('MMM DD, YYYY HH:mm')} </span>
                    <span>Created: {moment(noteCreated).fromNow()} </span>
                    <span>Note ID: {noteId} </span>
                </div>

                {timeLeft && (
                    <div>
                        <span className="inline-flex gap-1 text-xs text-slate-600">
                            <Badge 
                                className="mt-2 mb-1 text-2xs font-bold text-amber-500 bg-amber-800/30 rounded-full py-1 pl-2"
                                variant="secondary"
                            >
                                <LocalFireDepartmentOutlined 
                                    className="mr-0.5" 
                                    sx={{ fontSize: 14, strokeWidth: '2px' }} 
                                />
                                {timeLeft}
                            </Badge>
                        </span>
                    </div>
                )}
            </div>
            <Toaster/>

        </section>
    );
};

export default NoteCard;