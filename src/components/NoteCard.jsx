/*TODO: edit crud operations
TODO:all header, all thigns shoul be visible in individual card page, somehow disable Link for now /n/$id is working btw
TODO: simplyfy date parsing, passing logic , declutter*/
// burn time left calculation, and creeate-burn variable diplay to notes as hover card

import React, { useState } from 'react';
import { Calendar, CalendarDays, Delete, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { DeleteForever, DeleteOutlineOutlined, LocalFireDepartmentOutlined } from '@mui/icons-material';
import { Badge } from '@/components/ui/badge';
import parse from 'html-react-parser';
import appwriteNoteService from '../appwrite/config';
import conf from '../conf/conf';
import moment from 'moment';
import authService from '../appwrite/auth';
import { Button } from '@/components/ui/button';

//  else {
//     return "Expired";
//   }
// };
const NoteCard = ({ title, noteId = $id, content, createdAt }, ...props) => {
    const formatDate = (dateStringPassed) => {
        return dateStringPassed ? `${moment(dateStringPassed).format('MMM DD, YYYY')} at ${moment(dateStringPassed).format('HH:mm')}` : 'Invalid Date';
    };
    const deleteOnClickButton = async () => {
        console.log('id passed:', noteId);
        try {
            console.log('id passed undertryblock:', noteId);
            const result = await appwriteNoteService.deleteNote(noteId);
            console.log('note deletion result:', result);
        } catch (error) {
            console.log('Note card delete function error: ', error);
        }
    };
    
    const calculateTimeLeft = (createdDate, burnDate) => {
        // let burnDateIntoTime = burnDate.getTime() + 12 * 60 * 60 * 1000; // by default 12H
        let burnDateIntoTime = burnDate.getTime(); // by default 12H
        const diffInMs = parseInt(burnDateIntoTime) - parseInt(Date.now());
        if (diffInMs <= 0) {
            // const deleteExpiredNote = async () => {
            //     console.log('id passed calculate time left:', noteId);
            //     await appwriteNoteService.deleteNote(noteId);
            //     return result;
            // };
            // deleteExpiredNote()
            console.log("Result of expiration :: note deleted :: ",deleteOnClickButton());
            
        }
        let days, hours, minutes;
        // if (diffInMs > 0) {
        days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        // return `${hours}h ${minutes}m`;
        return `${days}d ${hours}h ${minutes}m`;
    };
    const noteCreated = new Date(createdAt);
    let noteBurn = new Date(new Date(createdAt).getTime() + 12 * 60 * 60 * 1000);
    //  noteBurn = new Date(new Date(createdAt).getTime()+ (2*60*60*1000));
    const todayDateNow = Date.now();
    // const noteBurn = new Date(createdAt);

    const timeLeft = calculateTimeLeft(noteCreated, noteBurn);

    return (
        // <Link to={`/n/${noteId}`}>
        <section className="pt-4 pr-2 pl-4 pb-2 my-2 mx-1 bg-slate-800/50 border border-slate-500/0 rounded-lg">
            <div className="space-y-2">
                <div className="flex justify-between ">
                    <h4 className="text-slate-200 break-words truncate">{title}</h4>
                    {/* fun, if you want all tehnotes to be deleted once the pages is rendered  */}
                    {/* <Button className='p-2' variant ="ghost" onClick={async ()=>await appwriteNoteService.deleteNote(noteId)} > */}

                    {/* Delete Button */}
                    <Button className="p-2" variant="ghost" onClick={deleteOnClickButton}>
                        <DeleteOutlineOutlined sx={{ fontSize: 16 }} className="text-slate-400 w-4" />
                    </Button>
                </div>

                <p className="text-sm text-slate-400 break-words text-balance">{parse(content)}</p>
                {/* <p className="text-sm text-slate-400">{content}</p> */}

                {/* <CalendarToday fontSize='small' className="w-2 h-2 mr-2 opacity-50" /> */}

                {/* CONDITIONAL DISPLAY OF TIMELEFT BADGE */}
                <div className="flex flex-col text-xs text-slate-600 break-all">
                    <span>Created: {formatDate(noteCreated)} </span>
                    <span>Burn: {formatDate(noteBurn)} </span>
                    <span>Now: {formatDate(todayDateNow)} </span>
                    <span>Now: {moment(noteCreated.getTime()).fromNow()} </span>
                </div>
                {/* <div className=" text-xs text-slate-600 break-all">{`Created: ${new Date(createdAt)} BurnDate:${(new Date(((new Date(createdAt)).getTime()+12*60*60*1000))).toString()}`}</div> */}

                {timeLeft ? (
                    <div className="">
                        <span className="inline-flex gap-1 text-xs text-slate-600">
                            {/* {creationDate} */}
                            {
                                <Badge className="mt-2 mb-1 text-2xs font-bold text-amber-500 bg-amber-800/30 rounded-full py-1 pl-2 " variant="secondary">
                                    <LocalFireDepartmentOutlined className="mr-0.5" sx={{ fontSize: 14, strokeWidth: '2px' }} />
                                    {timeLeft}
                                    {/* can cause exceptions as we have no clue wheere this will come from */}
                                </Badge>
                            }
                            {/* {keep ? "" : <Badge className='mt-2 mb-1 text-2xs font-bold text-amber-500 bg-amber-800/30 rounded-full py-1 pl-2 ' variant="secondary"> <LocalFireDepartmentOutlined className='mr-0.5' sx={{ fontSize: 14 , strokeWidth:"2px"}} />{timeLeft}</Badge>} */}
                            {/* {keep ? "" : <Badge className='text-2xs font-bold text-red-500 bg-red-700/30 rounded-full  py-0 ' variant="secondary"> <Flame className='mr-0.5 w-3' strokeWidth={3}/>{timeLeft}</Badge>} */}
                        </span>
                    </div>
                ) : null}
            </div>
        </section>
        // </Link>
    );
};

export default NoteCard;
