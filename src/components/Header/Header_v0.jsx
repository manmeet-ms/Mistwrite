import { useTheme } from '@/components/theme-provider';
import React, { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AccountCircle, AccountTree, DarkModeOutlined, Email, FavoriteOutlined, GitHub, Home, Instagram, LinkedIn, MenuOutlined, PersonAddAlt, RateReview, Store, VolunteerActivism, WbSunnyOutlined } from '@mui/icons-material';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../../appwrite/auth';
import globalStyle from '../../conf/globalStyle';
import { LatestUpdatesAsPopover } from '../UpdatesComponents';
import LogoutButton from './LogoutButton';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Header = ({ pagename }) => {
    const { setTheme } = useTheme();
    const sideNavIconStyle = 'w-5 h-5 mr-2 ';
    const commonSideNavLinkStyle = 'py-3 pl-4 gap-1 -ml-4 container  inline-flex items-center justify-start rounded-full  font-medium transition-colors   hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary';
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
            icon: <AccountCircle className={sideNavIconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            icon: <PersonAddAlt className={sideNavIconStyle} />,
            active: !authStatus,
        },
        {
            name: 'Contact',
            slug: '/contact',
            icon: <Email className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Projects',
            slug: 'https://linktrix.vercel.app',
            icon: <AccountTree className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Fiverr Profile',
            slug: 'https://www.fiverr.com/wavewalker777',
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
        {
            name: 'Feedback',
            slug: '#', //google/typeform fedbacck form mailchimp
            icon: <RateReview className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'View Source',
            slug: 'https://github.com/manmeet-ms/Mistwrite',
            icon: <GitHub className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Instagram',
            slug: '#',
            icon: <Instagram className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'LinkedIn',
            slug: '#',
            icon: <LinkedIn className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Sticker Store',
            slug: '#', //redbuble
            icon: <Store className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Support',
            slug: '#', //bmc
            icon: <VolunteerActivism className={sideNavIconStyle} />,
            active: authStatus,
        },
    ];

    const selectedArrayIndices = [0, 1, 2, 3, 4, 11];
    const selectedArrayItemstoRender = [];
    console.log(sideNavItems.length);
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
          <main className='sticky top-0 z-10 w-full flex-none   lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-background supports-backdrop-blur:bg-white/60 '>
          <header
                className={`${globalStyle.pageBodyPaddingX} `}>
                <div className="max-w-8xl mx-auto">
                    <div className="py-4 border-b border-slate-900/10 lg:px--8 lg:border-0 dark:border-slate-300/10 mx--4 lg:mx-0">
                        <div className="relative flex items-center">
                            <Link className="mr-3 flex-none  overflow-hidden md:w-auto" to="/">
                                <span className="sr-only">Mistwrtite, A notes creating app home page</span>
                                <span className="inline-flex gap-2 items-center">
                                    {/* <img className='w-6 h-6 text-primary' src={logo} alt="Logo"  /> */}
                                    {/* className='w-5 h-5 text-primary' */}
                                    <svg className="w-5 h-5 text-primary" viewBox="0 0 117 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.264 3.23199C24.72 3.488 29.2 3.744 31.888 3.744C39.312 3.744 52.88 3.23199 58.768 2.71999C61.968 2.464 65.296 1.696 67.6 0.799995L77.712 8.864C76.048 10.784 74.512 12.448 73.488 14.112C69.136 21.408 62.224 37.92 56.464 51.232C51.344 63.008 45.2 78.24 39.952 86.304C34.832 94.112 28.816 97.568 19.984 97.568C8.848 97.568 0.4 89.888 0.4 76.832C0.4 56.352 19.984 40.608 47.376 40.608C77.2 40.608 103.312 56.48 116.752 65.696L109.328 83.488C93.584 69.536 71.056 54.944 44.688 54.944C26 54.944 15.248 65.056 15.248 74.4C15.248 78.624 17.68 80.8 20.752 80.8C23.312 80.8 24.976 79.648 27.408 76.448C31.632 70.176 36.24 58.4 40.848 48.288C45.328 38.176 50.576 25.632 54.416 17.696C49.296 17.824 38.16 18.208 32.4 18.592C29.712 18.72 25.232 19.232 21.904 19.616L21.264 3.23199ZM105.488 33.44C103.696 69.792 96.528 93.344 65.936 109.216L52.24 98.08C83.856 84.512 87.696 60.576 88.848 45.6C89.104 40.608 89.232 35.488 88.72 31.52L105.488 33.44Z"
                                            fill="currentCOlor"
                                        />
                                    </svg>

                                    <h1 className="flex  tracking-tight items-center text-xl  text-foreground">
                                        Mistwrite
                                        {/* <span className="monoType text-xs ml-2 bg-muted border border-primary-foreground px-3 py-1 rounded-full">v0.2.0</span> */}
                                    </h1>
                                </span>
                            </Link>

                            <Link to="#" className="ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20">
                                <strong className="font-semibold">Annoucement: Introducing Catalyst</strong>
                                <svg width={2} height={2} fill="currentColor" aria-hidden="true" className="ml-2 text-sky-600 dark:text-sky-400/70">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <span className="ml-2">A modern application UI kit for React</span>
                                <svg width={3} height={6} className="ml-3 overflow-visible text-sky-300 dark:text-sky-400" aria-hidden="true">
                                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <div className="relative hidden lg:flex items-center ml-auto">
                                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                    <ul className="flex space-x-8">
                                        {selectedArrayItemstoRender.map((items) => {
                                            console.log('selected objects: ', items.name);

                                            return items.active ? (
                                                <li>
                                                    <Link className="hover:text-sky-500 dark:hover:text-sky-400" to={items.slug}>
                                                        {items.name}
                                                    </Link>
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </nav>
                                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                                    <label className="sr-only" htmlFor="headlessui-listbox-button-:R2lkcr6:" id="headlessui-label-:R1lkcr6:" data-headlessui-state="">
                                        Theme
                                    </label>
                                    <LatestUpdatesAsPopover />

                                    <div className="flex flex-col">
                                        <Button variant="icon" onClick={() => setTheme('light')} className="absolute opacity-0 dark:opacity-100  scale-0 dark:scale-100 ">
                                            <DarkModeOutlined />
                                        </Button>
                                        <Button variant="icon" onClick={() => setTheme('dark')} className="  scale-100 dark:scale-0 ">
                                            <WbSunnyOutlined />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300">
                                <span className="sr-only">Updates</span>
                                <LatestUpdatesAsPopover />
                            </button>
                            <div className="ml-2 -my-1 lg:hidden">
                                <button type="button" className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                                    <span className="sr-only">Mode Switcher</span>
                                    <div className="flex flex-col">
                                        <Button variant="icon" onClick={() => setTheme('light')} className="absolute opacity-0 dark:opacity-100  scale-0 dark:scale-100 ">
                                            <DarkModeOutlined />
                                        </Button>
                                        <Button variant="icon" onClick={() => setTheme('dark')} className="  scale-100 dark:scale-0 ">
                                            <WbSunnyOutlined />
                                        </Button>
                                    </div>
                                </button>
                                <div
                                    hidden=""
                                    style={{
                                        position: 'fixed',
                                        top: 1,
                                        left: 1,
                                        width: 1,
                                        height: 0,
                                        padding: 0,
                                        margin: '-1px',
                                        overflow: 'hidden',
                                        clip: 'rect(0, 0, 0, 0)',
                                        whiteSpace: 'nowrap',
                                        borderWidth: 0,
                                        display: 'none',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center py-4  lg:hidden dark:border-slate-50/[0.06]">
                        <button type="button" className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                            <span className="sr-only">Navigation</span>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <svg width={24} height={24}>
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

                                            <SheetDescription className="text-left text-xs">Made with {<FavoriteOutlined className="hover:text-rose-600" sx={{ fontSize: 14 }} />} by Manmeet Singh</SheetDescription>
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
                                                <Separator className="my-2 " />
                                                <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Network</span>{' '}
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
                                                    <Separator className="my-2 " />
                                                    <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">Other</span>{' '}
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
                        <Breadcrumb >
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                        <Link className="flex items-center font-semibold" to="/">
                                            Home
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />

                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        <span className="font-semibold text--slate-900 truncate dark:text--slate-200">{pagename}</span>
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                                                </ol>
                    </div>
                    <div className="flex md:hidden items-center justify-start gap-2 pt-1 pb-4"></div>
                </div>
            </header>
          </main>

        </>
    );
};

export default Header;
