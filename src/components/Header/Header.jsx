import { useTheme } from '@/components/theme-provider';
import React, { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';


import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../../appwrite/auth';
import globalStyle from '../../conf/globalStyle';
import { LatestUpdatesAsPopover } from '../UpdatesComponents';
import LogoutButton from './LogoutButton';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import {Heart,CircleUser, FolderTree, HeartHandshake, Home, Instagram, Linkedin, Mail, Menu, MessageSquareShare, Moon, ScanFace, ShoppingBag, SquareCode, SunDim } from 'lucide-react';

const Header = ({ pagename }) => {
    const { setTheme } = useTheme();
    const sideNavIconStyle = 'w-5 h-5 mr-2 ';
    // const commonSideNavLinkStyle = 'py-3 pl-4 gap-1 -ml-4 container  inline-flex items-center justify-start rounded-full  font-medium transition-colors   hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary';
    const commonSideNavLinkStyle = 'py-3 pl-4 gap-1 -ml-4 container  inline-flex items-center justify-start rounded-full  transition-colors   hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary';
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    const [userAvatarURL, setUserAvatarURL] = useState(null);
    const [userFullName, setUserFullName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userSessionLoginAgo, setUserSessionLoginAgo] = useState(null);
    const getProfile = () => {
        const response = authService.getAvatar().then((url) => {
            // console.log('url fetched', url);
            setUserAvatarURL(url);
        });
        // console.log(response);
    };
    useEffect(() => {
        getProfile();
        authService
            .getCurrentUser()
            .then((userData) => {
                // console.log(userData.name);
                // console.log(userData.email);
                // console.log(moment(userData.accessedAt).fromNow()); // Last login
                setUserFullName(userData.name);
                setUserEmail(userData.email);
                setUserSessionLoginAgo(moment(userData.accessedAt).fromNow()); // Last login
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                // dispatch(logout());
            })
            .finally(() => console.log('userData fetch successfull'));
    }, []); // Only run once on mount

    const sideNavItems = [
        {
            name: 'Home',
            slug: '/',
            icon: <Home className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Login',
            slug: '/login',
            // icon: <ScanFace className={sideNavIconStyle} />,
            icon: <CircleUser className={sideNavIconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            icon: <CircleUser className={sideNavIconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Contact',
            slug: '/contact',
            icon: <Mail className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Projects',
            slug: 'https://linktrix.vercel.app',
            icon: <FolderTree className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Fiverr Profile',
            slug: 'https://www.fiverr.com/wavewalker777',
            icon: (
                <svg className={`relative right-0.5 ${sideNavIconStyle}`} xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 192 192" fill='none'><path d="M0 0h192v192H0z"  /><path d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z" stroke='currentColor' strokeLinejoin='round'strokeLinecap='round' strokeWidth={14}/></svg>
            ),
            active: authStatus,
        },
        {
            name: 'Feedback',
            slug: '#', //google/typeform fedbacck form mailchimp
            icon: <MessageSquareShare className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'View Source',
            slug: 'https://github.com/manmeet-ms/Mistwrite',
            icon: <SquareCode className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Instagram',
            slug: 'https://www.instagram.com/manmeets__/',
            icon: <Instagram className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'LinkedIn',
            slug: 'https://www.linkedin.com/in/manmeets-/',
            // icon: <Linkedin className={sideNavIconStyle} />,
            icon: (
                <svg className={`${sideNavIconStyle} w-4 h-4`}  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 577 577" fill="none">
<path d="M450.201 576.56C443.201 576.56 437.501 570.88 437.501 563.88V371.16C437.501 301.48 401.741 301.48 388.261 301.48C350.701 301.48 331.681 324.92 331.681 371.16V563.9C331.681 570.9 326.001 576.58 319.001 576.58H210.021C203.021 576.58 197.341 570.9 197.341 563.9V196.76C197.341 189.76 203.021 184.08 210.021 184.08H319.021C326.021 184.08 331.701 189.76 331.701 196.76V210.44L338.261 205.02C364.061 183.68 394.841 172.86 429.741 172.86C472.881 172.86 509.201 186.64 534.761 212.74C561.761 240.3 576.021 281.34 576.021 331.4V563.9C576.021 570.9 570.321 576.58 563.321 576.58L450.201 576.56ZM388.281 276.08C416.161 276.08 462.921 288.44 462.921 371.16V551.2H550.621V331.4C550.621 246.78 506.561 198.26 429.741 198.26C361.141 198.26 331.421 250.06 330.181 252.26C327.941 256.32 323.701 258.84 319.081 258.84C318.041 258.84 316.981 258.68 315.901 258.42C310.261 257 306.321 251.98 306.321 246.22V209.48H222.721V551.22H306.321V371.16C306.321 311.62 336.961 276.08 388.281 276.08Z"  stroke='currentColor' strokeWidth={12}  fill="currentColor"/>
<path d="M23.6209 576.56C16.6209 576.56 10.9209 570.88 10.9209 563.88V196.76C10.9209 189.76 16.6209 184.08 23.6209 184.08H137.321C144.321 184.08 150.001 189.76 150.001 196.76V563.88C150.001 570.88 144.321 576.56 137.321 576.56H23.6209ZM36.3209 551.2H124.621V209.46H36.3209V551.2Z"  stroke='currentColor' strokeWidth={12}  fill="currentColor"/>
<path d="M79.961 161.34C35.881 161.34 0.0209961 125.28 0.0209961 80.9601C0.0209961 36.6201 35.881 0.560059 79.961 0.560059C123.981 0.560059 159.821 36.6401 159.821 80.9801C159.821 125.28 123.981 161.34 79.961 161.34ZM79.961 25.8801C49.881 25.8801 25.421 50.5801 25.421 80.9601C25.421 111.32 49.881 135.98 79.961 135.98C110.021 135.98 134.461 111.32 134.461 80.9601C134.441 50.6001 110.021 25.8801 79.961 25.8801Z"  stroke='currentColor' strokeWidth={12}  fill="currentColor"/>
</svg>
                ),
            active: authStatus,
        },

        {
            name: 'Sticker Store',
            slug: 'https://www.redbubble.com/people/manmeet-s/shop?asc=u', //redbuble
            icon: <ShoppingBag className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Support',
            slug: 'https://buymeacoffee.com/manmeets', //bmc
            icon: <HeartHandshake className={sideNavIconStyle} />,
            active: authStatus,
        },
    ];

    const SIDEBAR = (
        <button type="button" className="block md:-block md:hidden lg:hidden">
            <span className="sr-only">Navigation</span>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu />
                    </SheetTrigger>
                <SheetContent side="left" className="flex flex-col justify-between overflow-scroll">
                    <div>
                        <SheetHeader>
                            <SheetTitle>
                                <Link to="/">
                                    <h2 className="flex">Mistwrite</h2>
                                </Link>
                            </SheetTitle>

                            <SheetDescription className="text-left text-xs">Made with {<Heart className="hover:text-rose-500 w-3  inline-flex" fontSize={14} />} by Manmeet Singh</SheetDescription>
                        </SheetHeader>
                        {/* side nav links */}
                        <div id="collapsible-nav-links">
                            <div className="flex flex-col  mt-4 ">
                                {sideNavItems[0].active ? (
                                    <Link to={sideNavItems[0].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[0].icon} {sideNavItems[0].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[1].active ? (
                                    <Link to={sideNavItems[1].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[1].icon} {sideNavItems[1].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[2].active ? (
                                    <Link to={sideNavItems[2].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[2].icon} {sideNavItems[2].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[3].active ? (
                                    <Link to={sideNavItems[3].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[3].icon} {sideNavItems[3].name}
                                    </Link>
                                ) : null}
                                {authStatus ? (
                                    <>
                                        {' '}
                                        <Separator className="my-2 " />
                                        <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Network</span>{' '}
                                    </>
                                ) : null}{' '}
                            </div>
                            {sideNavItems[9].active ? (
                                <Link to={sideNavItems[9].slug} className={commonSideNavLinkStyle}>
                                    {' '}
                                    {sideNavItems[9].icon} {sideNavItems[9].name}
                                </Link>
                            ) : null}
                            {sideNavItems[5].active ? (
                                <Link to={sideNavItems[5].slug} className={commonSideNavLinkStyle}>
                                    {' '}
                                    {sideNavItems[5].icon} {sideNavItems[5].name}
                                </Link>
                            ) : null}
                            <div>
                                {sideNavItems[4].active ? (
                                    <Link to={sideNavItems[4].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[4].icon} {sideNavItems[4].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[8].active ? (
                                    <Link to={sideNavItems[8].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[8].icon} {sideNavItems[8].name}
                                    </Link>
                                ) : null}
                                <div>
                                    {authStatus ? (
                                        <>
                                            {' '}
                                            <Separator className="my-2 " />
                                            <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Other</span>{' '}
                                        </>
                                    ) : null}{' '}
                                </div>
                                {sideNavItems[11].active ? (
                                    <Link to={sideNavItems[11].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[11].icon} {sideNavItems[11].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[6].active ? (
                                    <Link to={sideNavItems[6].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[6].icon} {sideNavItems[6].name}{' '}
                                    </Link>
                                ) : null}
                                {sideNavItems[10].active ? (
                                    <Link to={sideNavItems[10].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[10].icon} {sideNavItems[10].name}
                                    </Link>
                                ) : null}
                                {sideNavItems[7].active ? (
                                    <Link to={sideNavItems[7].slug} className={commonSideNavLinkStyle}>
                                        {' '}
                                        {sideNavItems[7].icon} {sideNavItems[7].name}
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <SheetFooter>
                        <div className="flex flex-col gap-4">
                            <Separator />
                            <div className="flex gap-4 items-center">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage className="rounded-full" src={userAvatarURL} alt={userFullName} />
                                    <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{userFullName}</span>
                                    <span className="truncate text-xs">{userEmail}</span>
                                    <span className="truncate text-xs font-medium">
                                        Last login <span>{userSessionLoginAgo} </span>
                                    </span>
                                </div>
                            </div>
                            {authStatus && <LogoutButton className="bg-accent text-sm font-medium py-2 rounded-full" />}
                            {/* <ChevronsUpDown className="ml-auto size-4" /> */}
                        </div>
                        <SheetClose asChild></SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </button>
    );
    const selectedArrayIndices = [0, 1, 2, 3, 4, 11];
    const selectedArrayItemstoRender = [];
    // console.log(sideNavItems.length);
    for (let index = 0; index < selectedArrayIndices.length; index++) {
        try {
            // console.log(`LoopIdx: ${index} :: selectedArrayIndices ${selectedArrayIndices[index]}`);
            selectedArrayItemstoRender[index] = sideNavItems[selectedArrayIndices[index]];
        } catch (error) {
            console.log('error encountered', error);
        }
    }

    // console.log('selectedArrayItemstoRender', selectedArrayItemstoRender);

    return (
        <>
            {/* <main className='sticky top-0 z-10 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'> */}
            <header className={`sticky top-0 ${globalStyle.pageBodyPaddingX}  z-10 w-full flex-none border-b border-muted shadow-sm lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-background `}>
                <div className="max-w-8xl mx-auto">
                    <div className="py-2  lg:border-0 dark:border-slate-300/10  ">
                        <div className="relative flex items-center">
                            <Link className="mr-3 flex-none  overflow-hidden md:w-auto" to="/">
                                <span className="sr-only">Mistwrtite, A notes creating app home page</span>
                                <span className="inline-flex gap-2 items-center">
                                    <svg className="w-5 h-5 text-primary" viewBox="0 0 117 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.264 3.23199C24.72 3.488 29.2 3.744 31.888 3.744C39.312 3.744 52.88 3.23199 58.768 2.71999C61.968 2.464 65.296 1.696 67.6 0.799995L77.712 8.864C76.048 10.784 74.512 12.448 73.488 14.112C69.136 21.408 62.224 37.92 56.464 51.232C51.344 63.008 45.2 78.24 39.952 86.304C34.832 94.112 28.816 97.568 19.984 97.568C8.848 97.568 0.4 89.888 0.4 76.832C0.4 56.352 19.984 40.608 47.376 40.608C77.2 40.608 103.312 56.48 116.752 65.696L109.328 83.488C93.584 69.536 71.056 54.944 44.688 54.944C26 54.944 15.248 65.056 15.248 74.4C15.248 78.624 17.68 80.8 20.752 80.8C23.312 80.8 24.976 79.648 27.408 76.448C31.632 70.176 36.24 58.4 40.848 48.288C45.328 38.176 50.576 25.632 54.416 17.696C49.296 17.824 38.16 18.208 32.4 18.592C29.712 18.72 25.232 19.232 21.904 19.616L21.264 3.23199ZM105.488 33.44C103.696 69.792 96.528 93.344 65.936 109.216L52.24 98.08C83.856 84.512 87.696 60.576 88.848 45.6C89.104 40.608 89.232 35.488 88.72 31.52L105.488 33.44Z"
                                            fill="currentCOlor"
                                        />
                                    </svg>

                                    <h1 className="flex  tracking-tight items-center text-xl  text-foreground">
                                        Mistwrite
                                        <Link to="/changelog">
                                        <span className="monoType text-xs ml-2 bg-muted border border-primary-foreground px-3 py-1 rounded-full">v1.0.0</span>
                                        </Link>
                                    </h1>
                                </span>
                            </Link>
                      
                            {/* Announcement */}
                            <Link to="/changelog" className="ml-3 text-xs leading-5 font-medium text-primary bg-primary/10 rounded-full py-1 px-3 hidden xl:flex items-center  hover:bg-primary/20">
                                <strong className="font-semibold">Introducing Mistwrite</strong>
                                <svg width={2} height={2} fill="currentColor" aria-hidden="true" className="ml-2 text-primary dark:text-primary/70">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <span className="ml-2">Providing fatest ever UX in temporary note creation</span>
                                <svg width={3} height={6} className="ml-3 mt-0.5 overflow-visible text-primary dark:text-primary" aria-hidden="true">
                                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <div className="relative flex items-center ml-auto">
                                <nav className="text-sm leading-6 font-semibold text-secondary-foreground ">
                                    <ul className="hidden lg:flex space-x-6 border-r border-slate-200 mr-6 pr-6 dark:border-slate-800 ">
                                        {selectedArrayItemstoRender.map((key, items) => {
                                            // console.log('selected objects: ', items.name);

                                            return items.active ? (
                                                <li>
                                                    {/* <Link className="hover:text-sky-500 dark:hover:text-sky-400" to={items.slug}>
                                                        {items.name}
                                                    </Link> */}
                                                    <Link className=" px-2 py-1  hover:bg-accent/60  hover:text-primary  rounded transition-all duration-500 ease-in-out  " to={items.slug}>
                                                        {items.name}
                                                    </Link>
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </nav>
                                <div className="flex items-center space-x-4 text-muted-foreground transition-colors duration-500 ease ">
                                <div className="flex flex-col ">
                                        <Button variant="icon" onClick={() => setTheme('light')} className="px-0 absolute opacity-0 dark:opacity-100  scale-0 dark:scale-100 ">
                                            <Moon size={20} strokeWidth={2} />
                                        </Button>
                                        <Button variant="icon" onClick={() => setTheme('dark')} className="px-0   scale-100 dark:scale-0 ">
                                            {/* <WbSunnyOutlined /> */}
                                            <SunDim size={20} strokeWidth={2} />
                                        </Button>
                                    </div>
                                    {/* <span className="">
                                        <LatestUpdatesAsPopover />
                                    </span> */}

                                
                                    <button type="button" className="hidden md:hidden lg:block ">
                                        <span className="sr-only">Navigation</span>
                                        {
                                            <Sheet>
                                                <SheetTrigger asChild>
                                                <Menu/>

                                                </SheetTrigger>
                                                <SheetContent side="left" className="flex flex-col justify-between overflow-scroll">
                                                    <div>
                                                        <SheetHeader>
                                                            <SheetTitle>
                                                                <Link to="/">
                                                                    <h2 className="flex">Mistwrite</h2>
                                                                </Link>
                                                            </SheetTitle>

                                                            <SheetDescription className="text-left text-xs">Made with {<Heart className="hover:text-rose-500 w-3  inline-flex" fontSize={14} />} by Manmeet Singh</SheetDescription>
                                                        </SheetHeader>
                                                        {/* side nav links */}
                                                        <div id="collapsible-nav-links">
                                                            <div className="flex flex-col  mt-4 ">
                                                                {sideNavItems[0].active ? (
                                                                    <Link to={sideNavItems[0].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[0].icon} {sideNavItems[0].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[1].active ? (
                                                                    <Link to={sideNavItems[1].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[1].icon} {sideNavItems[1].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[2].active ? (
                                                                    <Link to={sideNavItems[2].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[2].icon} {sideNavItems[2].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[3].active ? (
                                                                    <Link to={sideNavItems[3].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[3].icon} {sideNavItems[3].name}
                                                                    </Link>
                                                                ) : null}
                                                                {authStatus ? (
                                                                    <>
                                                                        {' '}
                                                                        <Separator className="my-2 " />
                                                                        <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Network</span>{' '}
                                                                    </>
                                                                ) : null}{' '}
                                                            </div>
                                                            {sideNavItems[9].active ? (
                                                                <Link to={sideNavItems[9].slug} className={commonSideNavLinkStyle}>
                                                                    {' '}
                                                                    {sideNavItems[9].icon} {sideNavItems[9].name}
                                                                </Link>
                                                            ) : null}
                                                            {sideNavItems[5].active ? (
                                                                <Link to={sideNavItems[5].slug} className={commonSideNavLinkStyle}>
                                                                    {' '}
                                                                    {sideNavItems[5].icon} {sideNavItems[5].name}
                                                                </Link>
                                                            ) : null}
                                                            <div>
                                                                {sideNavItems[4].active ? (
                                                                    <Link to={sideNavItems[4].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[4].icon} {sideNavItems[4].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[8].active ? (
                                                                    <Link to={sideNavItems[8].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[8].icon} {sideNavItems[8].name}
                                                                    </Link>
                                                                ) : null}
                                                                <div>
                                                                    {authStatus ? (
                                                                        <>
                                                                            {' '}
                                                                            <Separator className="my-2 " />
                                                                            <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Other</span>{' '}
                                                                        </>
                                                                    ) : null}{' '}
                                                                </div>
                                                                {sideNavItems[11].active ? (
                                                                    <Link to={sideNavItems[11].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[11].icon} {sideNavItems[11].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[6].active ? (
                                                                    <Link to={sideNavItems[6].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[6].icon} {sideNavItems[6].name}{' '}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[10].active ? (
                                                                    <Link to={sideNavItems[10].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[10].icon} {sideNavItems[10].name}
                                                                    </Link>
                                                                ) : null}
                                                                {sideNavItems[7].active ? (
                                                                    <Link to={sideNavItems[7].slug} className={commonSideNavLinkStyle}>
                                                                        {' '}
                                                                        {sideNavItems[7].icon} {sideNavItems[7].name}
                                                                    </Link>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <SheetFooter>
                                                        <div className="flex flex-col gap-4">
                                                            <Separator />
                                                            <div className="flex gap-4 justify-start items-center">
                                                                <Avatar className="h-8 w-8 rounded-full">
                                                                    <AvatarImage className="rounded-full" src={userAvatarURL} alt={userFullName} />
                                                                    <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                                                </Avatar>
                                                                <div className="grid flex-1 text-left text-sm leading-tight">
                                                                    <span className="truncate font-semibold">{userFullName}</span>
                                                                    <span className="truncate text-xs">{userEmail}</span>
                                                                    <span className="truncate text-xs font-medium">
                                                                        Last login <span>{userSessionLoginAgo} </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {authStatus && <LogoutButton className="bg-accent text-sm font-medium py-2 rounded-full" />}
                                                            {/* <ChevronsUpDown className="ml-auto size-4" /> */}
                                                        </div>
                                                        <SheetClose asChild></SheetClose>
                                                    </SheetFooter>
                                                </SheetContent>
                                            </Sheet>
                                        }
                                    </button>
                                    {!pagename ? SIDEBAR : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {pagename ? (
                <div className={`${globalStyle.pageBodyPaddingX} flex items-center py-4 border-b border-dashed border-muted lg:hidden dark:border-slate-50/[0.06]`}>
                    <button type="button" className="">
                        {/* Breadcrumb navigation  */}
                        <span className="sr-only">Navigation</span>
                        <Sheet>
                            <SheetTrigger asChild>
                                <svg className="text-muted-foreground" width={24} height={24}>
                                    <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                                </svg>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col justify-between overflow-scroll">
                                <div>
                                    <SheetHeader>
                                        <SheetTitle>
                                            <Link to="/">
                                                <h2 className="flex">Mistwrite</h2>
                                            </Link>
                                        </SheetTitle>

                                        <SheetDescription className="text-left text-xs">Made with {<Heart className="hover:text-rose-500 w-3  inline-flex" fontSize={14} />} by Manmeet Singh</SheetDescription>
                                    </SheetHeader>
                                    {/* side nav links */}
                                    <div id="collapsible-nav-links">
                                        <div className="flex flex-col  mt-4 ">
                                            {sideNavItems[0].active ? (
                                                <Link to={sideNavItems[0].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[0].icon} {sideNavItems[0].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[1].active ? (
                                                <Link to={sideNavItems[1].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[1].icon} {sideNavItems[1].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[2].active ? (
                                                <Link to={sideNavItems[2].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[2].icon} {sideNavItems[2].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[3].active ? (
                                                <Link to={sideNavItems[3].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[3].icon} {sideNavItems[3].name}
                                                </Link>
                                            ) : null}
                                            {authStatus ? (
                                                <>
                                                    {' '}
                                                    <Separator className="my-2 " />
                                                    <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Network</span>{' '}
                                                </>
                                            ) : null}{' '}
                                        </div>
                                        {sideNavItems[9].active ? (
                                            <Link to={sideNavItems[9].slug} className={commonSideNavLinkStyle}>
                                                {' '}
                                                {sideNavItems[9].icon} {sideNavItems[9].name}
                                            </Link>
                                        ) : null}
                                        {sideNavItems[5].active ? (
                                            <Link to={sideNavItems[5].slug} className={commonSideNavLinkStyle}>
                                                {' '}
                                                {sideNavItems[5].icon} {sideNavItems[5].name}
                                            </Link>
                                        ) : null}
                                        <div>
                                            {sideNavItems[4].active ? (
                                                <Link to={sideNavItems[4].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[4].icon} {sideNavItems[4].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[8].active ? (
                                                <Link to={sideNavItems[8].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[8].icon} {sideNavItems[8].name}
                                                </Link>
                                            ) : null}
                                            <div>
                                                {authStatus ? (
                                                    <>
                                                        {' '}
                                                        <Separator className="my-2 " />
                                                        <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Other</span>{' '}
                                                    </>
                                                ) : null}{' '}
                                            </div>
                                            {sideNavItems[11].active ? (
                                                <Link to={sideNavItems[11].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[11].icon} {sideNavItems[11].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[6].active ? (
                                                <Link to={sideNavItems[6].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[6].icon} {sideNavItems[6].name}{' '}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[10].active ? (
                                                <Link to={sideNavItems[10].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[10].icon} {sideNavItems[10].name}
                                                </Link>
                                            ) : null}
                                            {sideNavItems[7].active ? (
                                                <Link to={sideNavItems[7].slug} className={commonSideNavLinkStyle}>
                                                    {' '}
                                                    {sideNavItems[7].icon} {sideNavItems[7].name}
                                                </Link>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <SheetFooter>
                                    <div className="flex flex-col gap-4">
                                        <Separator />
                                        <div className="flex gap-4 items-center">
                                            <Avatar className="h-8 w-8 rounded-lg">
                                                <AvatarImage className="rounded-full" src={userAvatarURL} alt={userFullName} />
                                                <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                            </Avatar>
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">{userFullName}</span>
                                                <span className="truncate text-xs">{userEmail}</span>
                                                <span className="truncate text-xs font-medium">
                                                    Last login <span>{userSessionLoginAgo} </span>
                                                </span>
                                            </div>
                                        </div>
                                        {authStatus && <LogoutButton className="bg-accent text-sm font-medium py-2 rounded-full" />}
                                        {/* <ChevronsUpDown className="ml-auto size-4" /> */}
                                    </div>
                                    <SheetClose asChild></SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </button>

                    <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                        <Link className="" to="/">
                                            <span className="flex items-center font-medium">Home</span>
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />

                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        <span className="font-medium text--slate-900 truncate dark:text--slate-200">{pagename}</span>
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </ol>
                </div>
            ) : null}
            <div className="flex md:hidden items-center justify-start gap-2 pt-1 pb-4"></div>
        </>
    );
};

export default Header;
