import React, { useEffect, useState } from "react";
import NoteCard  from "../components/NoteCard"; 
// import { NoteCard } from "../components/index";
import appwriteNoteService from "../appwrite/config";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    // queries could be passd in this empty array
    appwriteNoteService.getEveryNote([]).then((posts) => {
      if (posts) {
        setNotes(posts.documents); // as it will list of notes as arrays, which will be passed
      }
    });
  }, []);

  return(  
  <div>
    {notes.map((postIdx) => (
      <div key={notes.$id}>
        <NoteCard note={postIdx} /> // DOUBT: 11.07
      </div>
    ))}
  </div>)
};

export default AllNotes;
