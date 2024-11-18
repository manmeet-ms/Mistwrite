import { AppSidebar } from "./app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AccountCircleOutlined, AccountTreeOutlined, AccountTreeSharp, EmailOutlined, HomeMax, HomeOutlined, Instagram, PersonAddAltOutlined, PostAddOutlined, StorefrontOutlined, VolunteerActivismOutlined } from '@mui/icons-material';
import { Github, Home, PanelRightClose } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from '../Header/LogoutButton';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Sidebar = () => {
    const authStatus = useSelector((state) => state.auth.status);
    
    const IconStyle = 'w-5 h-5 ';
    const sideNavItems = [
        {
            name: 'Home',
            slug: '/',
            icon: <HomeOutlined className={IconStyle} />,
            active: authStatus,
        },
        {
            name: 'Login',
            slug: '/login',
            icon: <AccountCircleOutlined className={IconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            icon: <PersonAddAltOutlined className={IconStyle} />,
            active: !authStatus,
        },

        {
            name: 'Projects',
            slug: '#',
            icon: <AccountTreeOutlined className={IconStyle} />,
            active: authStatus,
        },

        {
            name: 'Contact',
            slug: '/notes',
            icon: <EmailOutlined className={IconStyle} />,
            active: authStatus,
        },
        {
            name: 'Fiverr Profile',
            slug: '/add-note',
            icon: (
                <svg className={`${IconStyle}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M40.9448 6H30.9806C23.7175 6 17.383 11.7259 17.8072 22.1009H10.6514V31.7615H18.2843V58H29.6146V31.7615H41.4219V58H53.3484V22.1011H30.3303V19.5964C30.3034 19.0841 30.3822 18.5718 30.5617 18.0913C30.7413 17.6108 31.0177 17.1723 31.3739 16.8032C31.7301 16.4341 32.1585 16.1422 32.6323 15.9456C33.1061 15.7491 33.6153 15.6521 34.1282 15.6607H40.9448V6Z"
                        fill="currentColor"
                    />
                </svg>
            ),
            active: authStatus,
        },
    ];
    const footerIcons = [
        {
            tooltip: 'View Source',
            icon: <Github className={IconStyle} />,
        },
        {
            tooltip: 'I post my work here',
            icon: <Instagram className={IconStyle} />,
        },

        {
            tooltip: 'Sticker Store',
            icon: <StorefrontOutlined />,
        },
        {
            tooltip: 'Support',
            icon: <VolunteerActivismOutlined />,
        },
    ];
    return (
        <>
         <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>

            <Sheet>
                <SheetTrigger asChild>
                    <PanelRightClose />
                    {/* <div className="flex flex-col text-sm text-accent-foreground font-semibold justify-center items-center ">
                        <span className={commonBottomNavItemNameStyle}>Menu</span>
                    </div> */}
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col justify-between">
                    <div className="">
                        <SheetHeader>
                            <SheetTitle>
                                <Link to="/">
                                    <div className="flex">Burning Notes</div>
                                </Link>
                            </SheetTitle>

                            <SheetDescription className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, deleniti!</SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col pt-4">
                            {sideNavItems.map((item) =>
                                item.active ? (
                                    <Link
                                        key={item.name}
                                        to={item.slug}
                                        className={`py-3 pl-4 gap-2 inline-flex items-center justify-start rounded-full font-medium mt-0.5 border border-accent-foreground/0 hover:border-accent-foreground/10  hover:bg-accent  hover:text-primary focus:bg-accent focus:text-primary transition-all duration-500 ease-in-out
                  }`}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ) : null,
                            )}
                        </div>
                    </div>
                    <SheetFooter>
                        <div className="flex flex-col gap-4 ">
                            {authStatus && <LogoutButton className="bg-accent py-3 rounded-full" />}

                            <div className="flex justify-evenly">
                                {footerIcons.map((items) => (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>{items.icon}</TooltipTrigger>
                                            <TooltipContent>
                                                <p>{items.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                        <SheetClose asChild></SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Sidebar;
