import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import React from 'react'
import { LatestUpdatesAsPage } from '../components/UpdatesComponents'
import BottomToolbar from '../components/BottomToolbar'
import Header from '../components/Header/Header'
import { Link } from "react-router-dom"
import globalStyle from "../conf/globalStyle"

const Changelog = () => {
  return (

    <>
    
    <Header pagename="Changelog"/>
      <section  className={`${globalStyle.pageBodyPaddingX} monoType`  }>
 
<section className="container py-2 ">
            <h1 className=" monoType  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Changelog</h1>
                    <p className=" monoType  [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in unde itaque quam eum officia harum. Quis voluptatibus enim possimus beatae aliquam impedit obcaecati odio. 
                    </p>
    <LatestUpdatesAsPage/>
</section>

      </section>
    <BottomToolbar/>
    </>
  )
}

export default Changelog