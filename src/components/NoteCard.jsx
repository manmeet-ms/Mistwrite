'use client';
import Balancer from 'react-wrap-balancer'
import { Badge } from '@/components/ui/badge';
import { motion, useAnimate } from 'framer-motion';
import parse from 'html-react-parser';
import { Slice } from 'lucide-react';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appwriteNoteService from '../appwrite/config';

const NoteCard = ({ title, noteId, content, createdAt, onDelete }) => {
    const [scope, animate] = useAnimate();
    // const formatDate = useCallback((dateString) => {
    //     return dateString ? `${moment(dateString).format('MMM DD, YYYY')} at ${moment(dateString).format('HH:mm')}` : 'Invalid Date';
    // }, []);

    const [tleftString, settleftString] = useState('00h 00m');
    const deleteNoteOperation = async () => {
        if (!noteId) {
            console.error('No noteId provided');
            return;
        }

        try {
            await appwriteNoteService.deleteNote(noteId);
            if (onDelete) {
                onDelete(noteId);
            }
        } catch (error) {
            alert('Error deleting note:', error);
            // console.error('Error deleting note:', error);
        }
    };

    const handleDragEnd = async (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -100 || offset > 100 || velocity < -500) {
            // Swipe to delete
            await animate(
                scope.current,
                {
                    x: offset,
                    opacity: 0,
                },
                {
                    duration: 0.2,
                },
            );

            // Wait for animation to complete before deleting
            deleteNoteOperation();
            // setTimeout(deleteNoteOperation, 100);
        } else {
            // Snap back if not swiped far enough
            await animate(
                scope.current,
                {
                    x: 0,
                    opacity: 1,
                },
                {
                    duration: 0.2,
                },
            );
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

        return `${hours}h ${minutes}m`;
    }, []);

    // Calculate burn time when component mounts and set up interval
    useEffect(() => {
        const noteCreated = new Date(createdAt);
        // Set burn time to 24 hours after creation
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
        <motion.section
            ref={scope}
            drag="x"
            dragDirectionLock
            onDragEnd={handleDragEnd}
            className="pt-4 pr-2 pl-4 pb-2 h-fit max-h-[400px] overflow-auto text-card-foreground border-2 backdrop-blur-lg border-card-foreground/10 rounded-md transition-all duration-500 ease-in-out cursor-grab active:cursor-grabbing">
            <Link to={`/n/${noteId}`}>
                {' '}
                <div   className="space-y-2">
                    <div className="flex justify-between">
                        <h4 className="w-20 md:w-24 lg:w-36 text-card-foreground break-words">{title}</h4>

                        {timeLeft && (
                            <div>
                                <span>
                                    <Badge className="font-[700] text-2xs text-primary bg-primary/15 hover:bg-primary/20 rounded-full py-1 pl-2" variant="secondary">
                                        <Slice className="mr-1" size={12} strokeWidth={2.5} />
                                        {tleftString}
                                    </Badge>
                                </span>
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground  break-words text-balance">{parse(content)}</p>

                    <div className="flex flex-col text-xs text-muted-foreground/50 break-all">
                        <span>Created {moment(noteCreated).fromNow()} </span>
                    </div>
                </div>
            </Link>
        </motion.section>
    );
};

export default NoteCard;
