import { Loader2 } from 'lucide-react'
import React from 'react'
import { ThemeProvider } from "@/components/theme-provider";

const Loader = () => {
  return (
        <ThemeProvider>
    <div className='container h-[100vh] flex justify-center items-center ' >
        <Loader2/>
    </div>
      </ThemeProvider>
  )
}

export default Loader