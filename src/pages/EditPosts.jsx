import React, { useEffect, useState } from 'react'
import appwriteNoteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import NoteCard from '../components/NoteCard'

const EditPosts = () => {
    const [notes, setNotes] = useState(null)
    const slugParam  = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
if (slugParam){
    appwriteNoteService.displayEveryNote
// TODO
}
    }, [slugParam, navigate])
  return (
    <div>EditPosts</div>
  )
}

export default EditPosts