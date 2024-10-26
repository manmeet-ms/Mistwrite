import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import appwriteNoteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@/components/theme-provider';
import { Add } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

export default function AddNote({ onNoteCreate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm({
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
                
                toast.success('Note created successfully');
            }
        } catch (error) {
            console.error('Error creating note:', error);
            toast.error('Failed to create note');
        } finally {
            setIsSubmitting(false);
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
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <span className="fixed bottom-8 right-4 flex p-4 justify-center items-center font-medium text-blue-950 bg-blue-400 rounded-2xl cursor-pointer">
                        <Add />
                    </span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Note</DialogTitle>
                        <DialogDescription>
                            Add a new note to your collection.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(submitNoteData)} className="space-y-4">
                        <div>
                            <Input
                                placeholder="Title"
                                {...register('title', { 
                                    required: 'Title is required',
                                    minLength: {
                                        value: 3,
                                        message: 'Title must be at least 3 characters'
                                    }
                                })}
                            />
                            {errors.title && (
                                <span className="text-red-500 text-sm">{errors.title.message}</span>
                            )}
                        </div>
                        
                        <div>
                            <Input
                                placeholder="Content"
                                {...register('content', { 
                                    required: 'Content is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Content must be at least 10 characters'
                                    }
                                })}
                            />
                            {errors.content && (
                                <span className="text-red-500 text-sm">{errors.content.message}</span>
                            )}
                        </div>

                        <DialogFooter>
                            <Button 
                                type="submit" 
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Creating...' : 'Create Note'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}