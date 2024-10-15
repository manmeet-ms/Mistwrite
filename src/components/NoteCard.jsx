/*
TODO: deal with individual page theming later, their crud operations
all header, all thigns shoul be visible in individual card page, somehow disable Lonk for now /n/$id is working btw

- breadcrusb in heaader 

BUG: but data is fed like this 
PostId:undefined Created: Invalid Date BurnDate:same + Invalid Date
NaNd NaNh NaNm
*/

import React, { useState } from 'react';
import { Calendar, CalendarDays, Delete, Flame } from 'lucide-react';
// import { Link } from "react-router-dom";
import appwriteService from '../appwrite/config';
import { DeleteForever, DeleteOutlineOutlined, LocalFireDepartmentOutlined } from '@mui/icons-material';
import { Badge } from '@/components/ui/badge';
import parse from 'html-react-parser';
import appwriteNoteService from '../appwrite/config';
import conf from '../conf/conf';
import moment from 'moment';
import authService from '../appwrite/auth';
import { Button } from '@/components/ui/button';

const calculateTimeLeft = (createdDate, burnDate) => {
    const diffInMs = parseInt(burnDate) - parseInt(createdDate);
    let days, hours, minutes;
    // if (diffInMs > 0) {
    days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}d ${hours}h ${minutes}m`;
};
//  else {
//     return "Expired";
//   }
// };
const NoteCard = ({ title, noteId = $id, content, createdAt }, ...props) => {
    const handleClick = async () => {
        console.log('id passed:', noteId);
        try {
            console.log('id passed undertryblock:', noteId);
            const result = await appwriteNoteService.deleteNote(noteId);
            console.log('note deletion result:', result);
        } catch (error) {
            console.log('Note card delete function error: ', error);
        }
    };
    const [error, seterror] = useState('');
    // const [noteCreatedAt, setNoteCreatedAt] = useState(null);
    // const [noteBurnAt, setNoteBurnAt] = useState(null);
    // const [timeLeft, settimeLeft] = useState(null);

    // burn time left calculation, and creeate-burn variable diplay to notes as hover card

    const noteCreated = new Date(createdAt);
    // const noteBurn = new Date(createdAt + 12*60*60*1000);
    const noteBurn = `same + ${new Date(createdAt).toString()}`;

    const timeLeft = calculateTimeLeft(noteCreated, noteBurn);

    return (
        // <Link to={`/n/${noteId}`}>
        <section className="pt-4 pr-2 pl-4 pb-2 my-2 mx-1 bg-slate-800/50 border border-slate-500/0 rounded-lg">
            <div className="space-y-2">
                <div className="flex justify-between ">
                    <h4 className="text-slate-200 break-words">{title}</h4>
                    {/* fun, if you want all tehnotes to be deleted once the pages is rendered  */}
                    {/* <Button className='p-2' variant ="ghost" onClick={async ()=>await appwriteNoteService.deleteNote(noteId)} > */}
                    <Button className="p-2" variant="ghost" onClick={handleClick}>
                        <DeleteOutlineOutlined sx={{ fontSize: 16 }} className="text-slate-400 w-4" />
                    </Button>
                </div>

                <p className="text-sm text-slate-400">{parse(content)}</p>
                {/* <p className="text-sm text-slate-400">{content}</p> */}

                {/* <CalendarToday fontSize='small' className="w-2 h-2 mr-2 opacity-50" /> */}

                {/* CONDITIONAL DISPLAY OF TIMELEFT BADGE */}
                <div className="inline-flex gap-1 text-xs text-slate-600">{`PostId:${noteId} \n Created: ${noteCreated} \n BurnDate:${noteBurn}`}</div>
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
