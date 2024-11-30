import { ThemeProvider } from '@/components/theme-provider';

import React from 'react';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import { LatestUpdatesAsPage } from '../components/UpdatesComponents';
import globalStyle from "../conf/globalStyle";

const Changelog = () => {
  return (

    <>
<ThemeProvider>
    <Header pagename="Changelog"/>
      <section  className={`${globalStyle.pageBodyPaddingX} monoType`  }>
 
<section className="container py-2 ">
            <h1 className="  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Changelog</h1>
                    <p className=" text-muted-foreground [&:not(:first-child)]:mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in unde itaque quam eum officia harum. Quis voluptatibus enim possimus beatae aliquam impedit obcaecati odio. 
                    </p>
    <LatestUpdatesAsPage/>
</section>

      </section>
    <BottomToolbar/>
</ThemeProvider>

    </>
  )
}

export default Changelog