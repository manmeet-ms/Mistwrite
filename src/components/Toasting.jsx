import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
const Toasting = () => {
    const tst= new toast()
  return (
    <div>
        <Toaster/>
    </div>
  )
}

export default Toasting