import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = 'Content' }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
                name={name || 'content'}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey="xaklimerojf3nka5mboafdrmzj0d1rqxa8f7rc047ukqjzp7"
                        init={{
                            initialValue: defaultValue,
                            height: 400,
//                             skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
//   content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
                            menubar: false,
                            // skin: 'oxide',
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'charmap',
                                'preview',
                                'anchor',
                                // 'searchreplace',
                                'visualblocks',
                                'table',
                                'code',
                                // 'help',
                                'wordcount',
                            ],
                            toolbar: 'undo redo |  bold italic underline link | table bullist numlist ',

                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}
