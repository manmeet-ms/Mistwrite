import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import RTE from '../components/RTE';
import appwriteNoteService from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@/components/theme-provider';
import { Add, AutoFixHighRounded, PhotoFilterRounded } from '@mui/icons-material';

export default function AddNote({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submitNoteData = async (data) => {
        console.log(`clicked\n data as follows: ${data}`);

        try {
            if (post) {
                // Updating existing note
                const dbPost = await appwriteNoteService.updateNote(post.$id, {
                    ...data,
                    userId: userData.$id,
                });

                if (dbPost) {
                    navigate(`/n/${dbPost.$id}`);
                }
            } else {
                // Creating new note
                const dbPost = await appwriteNoteService.createNote({
                    title: data.title,
                    content: data.content,
                    status: data.status,
                    userId: userData.$id,
                });

                if (dbPost) {
                    console.log('Note created successfully');
                    navigate('/');
                } else {
                    console.log('Failed to create note');
                }
            }
        } catch (error) {
            console.error('Error submitting note:', error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-');

        return '';
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    
    return (
        
        <ThemeProvider>
                       
            <Dialog>
                <DialogTrigger asChild>
                    {/* <Button className="fixed bottom-12 right-4 flex flex-col items-center font-medium text-blue-950 bg-blue-400 rounded-2xl"> */}
                    <span className='fixed bottom-8 right-4 flex p-4 justify-center items-center font-medium text-blue-950 bg-blue-400 rounded-2xl'  >
                        <Add/>
                    </span>
                    {/* </Button> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(submitNoteData)}>
                        <Input label="Title :" placeholder="Title" {...register('title', { required: true })} />
                        <Input label="Slug :" placeholder="Slug" {...register('slug', { required: true })} />
                        <Input label="Content :" name="content" {...register('content', { required: true })} />
                        {/*   
                <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
                />
                
                <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                  setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                  }}
                  />
                  <Input
                  label="Content :" name="content" 
                  {...register("content", { required: true })}
                  /> */}
                        {/* <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /> */}

                        <div className="w-1/3 px-2">
                            {/* <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                    /> */}
                            {/* {post && (
                                <div className="w-full mb-4">
                                    <img src={appwriteNoteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
                                </div>
                            )} */}
                            {/* <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                    /> */}
                        </div>
                        <Button type="submit" className="w-full">
                            {post ? 'Update' : 'Submit'}
                        </Button>
                    </form>
                    <DialogFooter>
                        {/* <Button onClick={buttonCall} type="submit" className="w-full">
                    {post ? "Update" : "Submit"}
                    </Button> */}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}
