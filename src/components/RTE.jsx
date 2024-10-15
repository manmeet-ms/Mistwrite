import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
// import {Editor } from '@tinymce/tinymce-react';
import conf from '../conf/conf.js';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
      <Editor
      apiKey={conf.tinymceApiKey}
      
      init={{
        height:250,
        menubar: false,
        plugins: [
          "image",
          // "advlist",
          // "autolink",
          "lists",
          // "link",
          // "preview",
          // "anchor",
          // "searchreplace",
          // "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          // "table",
          // "help",
          "wordcount",
      ],
      toolbar:
      "undo redo | blocks | image | bold italic forecolor | bullist numlist outdent indent | removeformat",
      // toolbar:
      // "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | bullist numlist outdent indent |removeformat | help",
      content_style: "body { font-family:Plus Jakarta Sans,Helvetica,Arial,sans-serif; font-size:14px }",

        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue="Welcome to TinyMCE!"
    />
      
       
    )}
    />
     </div>
  )
}

// import React, { useRef } from 'react'
// import {Editor } from 'tinymce';
// import {Controller } from 'react-hook-form';


// export default function RTE({name, control, label, defaultValue =""}) {
//   const editorRef = useRef(null);
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   return (
//     <div className='w-full'> 
//     {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//     <Controller
//     name={name || "content"}
//     control={control}
//     render={({field: {onChange}}) => (
//         <Editor
//         onInit={(evt, editor) => editorRef.current = editor}
//         initialValue={defaultValue}
//         init={{
//             initialValue: defaultValue,
//             height: 500,
//             menubar: true,
//             plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//             ],
//             toolbar:
//             "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//         }}
//         onEditorChange={onChange}
//         />
//     )}
//     />

//      </div>
//   )
// }

// // import React from "react";
// // import { Controller } from "react-hook-form";
// // import { Editor } from "tinymce"; // if got error use @imports  4:48
// // // import { Editor } from "@tinymce/tinymce-react"; // if got error use @imports  4:48

// // const RTE = ({ name, control, label, defaultValue = "" }) => {
// //   const tinymceplugins = [
// //     "advlist autolink lists link image charmap print preview anchor pagebreak",
// //     "searchreplace visualblocks visualchars code fullscreen",
// //     "insertdatetime media table paste code help wordcount",
// //     "imagetools template",
// //   ];

// //   const tinymcetoolbar =
// //     "undo redo | formatselect | bold italic backcolor | \
// //                        alignleft aligncenter alignright alignjustify | \
// //                        bullist numlist outdent indent | \
// //                        removeformat | help";
// //   return (
// //     <>
// //       <div>RTE</div>;{label && <p className="text-red-500">{label} </p>}
// //       <Controller
// //         name={name || "content"}
// //         control={control}
// //         render={({ field: { onChange } }) => (
// //           <Editor
// //             initialValue={defaultValue}
// //             init={{
// //               height: 500,
// //               menubar: true,
// //               tinymceplugins: tinymceplugins,
// //               tinymcetoolbar: tinymcetoolbar,
// //               convert_urls: true,
// //               //   relative_urls: false,
// //               //   remove_script_host: false,
// //             }}
// //             onEditorChange={onChange}
// //           />
// //         )}
// //       />
// //     </>
// //   );
// // };

// // export default RTE;
