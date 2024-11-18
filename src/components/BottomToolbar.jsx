import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,SheetClose } from '@/components/ui/sheet';
import { AccountCircleOutlined, AccountTreeOutlined, AccountTreeRounded, AccountTreeSharp, CodeOutlined, EmailOutlined, EmailSharp, EmojiFoodBeverageOutlined, EmojiFoodBeverageSharp, Facebook, FacebookOutlined, FacebookSharp, GitHub, HomeOutlined, InfoOutlined, Instagram, LayersOutlined, MessageOutlined, PersonAddAltOutlined, PostAddTwoTone, Send, SettingsOutlined, StorefrontOutlined, StorefrontSharp, VolunteerActivismOutlined, VolunteerActivismSharp } from '@mui/icons-material';
import { Github, Home, Menu, PanelRightClose } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './Header/LogoutButton';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/20  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-medium';
    const sideNavIconStyle="w-5 h-5"
    const SheetFooterIconStyle = ' px-2 py-1 rounded-full';
    const sideNavItems = [
        {
            name: 'Home',
            slug: '/',
            icon: <HomeOutlined className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Login',
            slug: '/login',
            icon: <AccountCircleOutlined className={sideNavIconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            icon: <PersonAddAltOutlined className={sideNavIconStyle} />,
            active: !authStatus,
        },

        {
            name: 'Projects',
            slug: '#',
            icon: <AccountTreeOutlined className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Contact',
            slug: '/notes',
            icon: <EmailOutlined className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Fiverr Profile',
            slug: '/add-note',
            icon: (
                <svg className={sideNavIconStyle} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            icon: <CodeOutlined sx={{fontSize:36}} className={`bg-primary/0 hover:bg-green-500/10 text-secondary-foreground hover:text-green-500 ${SheetFooterIconStyle}`} />,
        },
        {
            tooltip: 'I post my work here',
            icon: <Instagram sx={{fontSize:36}} className={`bg-primary/0 hover:bg-pink-500/10 text-secondary-foreground hover:text-pink-500 ${SheetFooterIconStyle}`} />,
        },

        {
            tooltip: 'Sticker Store',
            icon: <StorefrontOutlined sx={{fontSize:36}} className={`bg-primary/0 hover:bg-sky-500/10 text-secondary-foreground hover:text-sky-500 ${SheetFooterIconStyle}`} />,
        },
        {
            tooltip: 'Support',
            icon: <VolunteerActivismOutlined sx={{fontSize:36}} className={`bg-primary/0 hover:bg-red-500/10 text-secondary-foreground hover:text-red-500 ${SheetFooterIconStyle}`} />,
        },
    ];
    const bottomNavItems = [
        {
            name: 'Menu',
            // slug: '#',
            icon: ( <Sheet>
                <SheetTrigger  asChild >
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
                    <div className="flex flex-col">
                        {sideNavItems.map((item) =>
                            item.active ? (
                                <Link
                                    key={item.name}
                                    to={item.slug}
                                    className={`py-4 pl-4  gap-2 inline-flex items-center justify-start whitespace-nowrap rounded-full  font-medium transition-colors  disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary
                  }`}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ) : null,
                        )}
                    </div>

                    </div>
                    <SheetFooter>
                <div className="flex flex-col gap-4">
                {authStatus && <LogoutButton className="bg-accent py-4 rounded-full" />}

<div className="flex justify-evenly">
    {footerIcons.map((items)=>(
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
                         <SheetClose asChild>
                        </SheetClose>
                        
                    </SheetFooter>
                </SheetContent>
            </Sheet> ),
        },

        {
            name: 'Notes',
            slug: '/',
            icon: <LayersOutlined />,
        },
        {
            name: 'Create',
            slug: '/add-note',
            icon: <PostAddTwoTone />,
        },
        {
            name: 'Settings',
            slug: '/settings',
            icon: <SettingsOutlined />,
        },
    ];

    return (
        <>
            <footer className="fixed px-4 bottom-0 py-2 container bg-accent text-accent-foreground">
                <div className="flex justify-between items-center">
                    {/* <Sheet>
                        <SheetTrigger>
                            <div className="flex flex-col text-sm text-accent-foreground font-semibold justify-center items-center ">
                                <Menu className={`px-4 py-1 rounded-full w-14 h-[30px] bg-primary/20`}  />
                                <span className={commonBottomNavItemNameStyle}>Menu</span>
                            </div>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link to="/">
                                        <div className="flex">Burning Notes</div>
                                    </Link>
                                </SheetTitle>

                                <SheetDescription className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, deleniti!</SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col">
                                {sideNavItems.map((item) =>
                                    item.active ? (
                                        <Link
                                            key={item.name}
                                            to={item.slug}
                                            className={`py-4 px-4 mt-1 inline-flex items-center justify-start whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground
                          }`}>
                                            {item.name}
                                        </Link>
                                    ) : null,
                                )}
                            </div>
                            <SheetFooter>
                                <GitHub />
                                <InfoOutlined />
                                 <SheetClose asChild>
                                {authStatus && <LogoutButton />}</SheetClose>
                                
                            </SheetFooter>
                        </SheetContent>
                    </Sheet> */}
                    {bottomNavItems.map((item) => (
                        <Link className="flex flex-col text-sm text-accent-foreground font-semibold justify-center items-center" to={item.slug}>
                            <span className={commonBottomNavIconStyle}>{item.icon}</span>
                            <span className={commonBottomNavItemNameStyle}>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </footer>
        </>
    );
};

export default BottomToolbar;
