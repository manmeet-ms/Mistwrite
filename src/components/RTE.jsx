import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue ="Content"}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        apiKey='xaklimerojf3nka5mboafdrmzj0d1rqxa8f7rc047ukqjzp7'
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            // skin: 'oxide',
            plugins: [
                "image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor", ],
            toolbar:
            "undo redo  bold italic link bullist numlist outdent indent  removeformat | help",
            content_style: ""
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}
