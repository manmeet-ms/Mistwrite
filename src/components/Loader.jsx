import { Loader2 } from 'lucide-react'
import React from 'react'

import { ThemeProvider } from "@/components/theme-provider";
import { Skeleton } from "@/components/ui/skeleton"
import { Masonry } from '@mui/lab';
import Header from './Header/Header';
import BottomToolbar from './BottomToolbar';
import globalStyle from '../conf/globalStyle';
 
const Loader = () => {
  return (
        <ThemeProvider>
{/* <Skeleton className="h-6 w-60 mt- mb-6"/> */}
          <Header/>
 <section className={globalStyle.pageBodyPaddingX}>
 <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={1} className=''>
      <Skeleton className="h-64 w-36 " />
      <Skeleton className="h-32 w-36 " />
      <Skeleton className="h-72 w-36 " />
      <Skeleton className="h-56 w-36 " />
      <Skeleton className="h-72 w-36 " />
      <Skeleton className="h-32 w-36 " />
      <Skeleton className="h-64 w-36 " />
      
                        </Masonry>
 </section>
    {/* <div className='container h-[100vh] flex flex-col space-y-4 justify-center items-center ' >
    <Loaders.ScaleLoader color="#1e293b" />
    </div> */}
    <BottomToolbar/>
      </ThemeProvider>
  )
}

export default Loader