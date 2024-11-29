import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ThemeProvider } from '@/components/theme-provider';
import { useSelector } from 'react-redux';
import appwriteNoteService from '../appwrite/config';
import Header from '../components/Header/Header';
import RTE from '../components/RTE';
import { Link, useNavigate } from 'react-router-dom';
import BottomToolbar from '../components/BottomToolbar';
import globalStyle from '../conf/globalStyle';

export default function AddNote({ onNoteCreate }) {
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        reset,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            content: '',
            status: 'active',
        },
    });

    const userData = useSelector((state) => state.auth.userData);

    const submitNoteData = async (data) => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            const dbPost = await appwriteNoteService.createNote({
                title: data.title,
                content: data.content,
                status: data.status,
                userId: userData.$id,
            });

            if (dbPost) {
                // Notify parent component
                if (onNoteCreate) {
                    await onNoteCreate(dbPost);
                }

                // Reset form
                reset();

                // Close dialog
                setIsOpen(false);

            }
        } catch (error) {
            console.error('Error creating note:', error);
        } finally {
            setIsSubmitting(false);
            navigate("/")
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-');
        }
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
            <Header pagename="Create new note" />
<main className="flex justify-center items-center ">
<section className={`w-full md:w-[50vw] md:max-w-[75vw] md:mt-12  ${globalStyle.pageBodyPaddingX}`}>
                
                <form onSubmit={handleSubmit(submitNoteData)} className="space-y-4">
                    <div>
                        <Input
                            placeholder="Title"
                            // className="border-none placeholder:text-lg"
                            {...register('title', {
                                required: 'Title is required',
                                minLength: {
                                    value: 3,
                                    message: 'Title must be at least 3 characters',
                                },
                            })}
                        />
                        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                    </div>
    
                    <div>
                        <RTE name="content" control={control} defaultValue={getValues('content')} />
    
                        {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
                    </div>
    
                    {/* <DialogFooter> */}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating...' : 'Create Note'}
                    </Button>
                    {/* </DialogFooter> */}
                </form>
                {/* </DialogContent> */}
                {/* </Dialog> */}</section>
</main>
            <BottomToolbar/>
        </ThemeProvider>
    );
}
