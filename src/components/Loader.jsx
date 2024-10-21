import { Loader2 } from 'lucide-react'
import React from 'react'
import * as Loaders from 'react-spinners'
import { ThemeProvider } from "@/components/theme-provider";

const Loader = () => {
  return (
        <ThemeProvider>
    <div className='container h-[100vh] flex flex-col space-y-4 justify-center items-center ' >
    {/* <Loaders.HashLoader speedMultiplier={0.9} color="#4ade80" /> */}
    <Loaders.ScaleLoader color="#1e293b" />
    </div>
      </ThemeProvider>
  )
}

export default Loader