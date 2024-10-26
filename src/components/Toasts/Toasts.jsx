import React from 'react'
import { useToast } from "@/hooks/use-toast"
import { Toaster as ToastShadcn } from "@/components/ui/toaster"
import toast, { Toaster } from 'react-hot-toast';
export const ToastSucess = () => {
  
  const { toastShadcn } = useToast()
toast('Here is your toast.');
  toastShadcn({
    variant:"success",
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  })
  
  return (
    <>
    <ToastShadcn/> 
    <Toaster />
    </>
  )
}
export const ToastDestructive = () => {
  
  const { toastShadcn } = useToast()
toast('Here is your toast.');
  toastShadcn({
    variant:"destructive",
    title: "Scheduled: Catch up",
    description: "Friday, February 10, 2023 at 5:57 PM",
  })
  
  return (
    <>
    <ToastShadcn/>
    <Toaster />
    </>
  )
}
