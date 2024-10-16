import React, { useEffect, useState } from 'react'
import appwriteNoteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import NoteCard from '../components/NoteCard'
import { ThemeProvider } from '@/components/theme-provider';

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
    <ThemeProvider>

    <div>EditPosts</div>
    </ThemeProvider> 
  )
}

export default EditPosts