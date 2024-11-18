import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    AccountCircleOutlined,
    AccountTreeOutlined,
    AccountTreeRounded,
    AccountTreeSharp,
    CodeOutlined,
    EmailOutlined,
    EmailSharp,
    EmojiFoodBeverageOutlined,
    EmojiFoodBeverageSharp,
    Facebook,
    FacebookOutlined,
    FacebookSharp,
    FavoriteOutlined,
    GitHub,
    HomeOutlined,
    InfoOutlined,
    Instagram,
    LayersOutlined,
    MessageOutlined,
    PersonAddAltOutlined,
    PostAddTwoTone,
    RateReviewOutlined,
    Send,
    SettingsOutlined,
    StorefrontOutlined,
    StorefrontSharp,
    VolunteerActivismOutlined,
    VolunteerActivismSharp,
} from '@mui/icons-material';
import { ChevronsUpDown, Github, Home, Menu, PanelRightClose, Pencil } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './Header/LogoutButton';
import authService from '../appwrite/auth';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect } from 'react';
import moment from 'moment';
import { FormControl } from '@mui/material';
const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/20  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-medium';
    const sideNavIconStyle = 'w-5 h-5 mr-2 ';
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
        },{
            name: 'Feedback',
            slug: '#',
            icon: <RateReviewOutlined className={sideNavIconStyle} />,
            active: authStatus,
        },
    ];
    const userData = useSelector((state) => state.auth.userData);
    const [avatarURL, setAvatarURL] = useState(null);
    const getProfile = () => {
        const response = authService.getAvatar().then((url) => {
            console.log('url fetched', url);
            setAvatarURL(url);
        });
        console.log(response);
    };
    useEffect(() => {
        getProfile();
        authService
            .getCurrentUser()
            .then((userData) => {
                // console.log(userData.name);
                // console.log(userData.email);
                // console.log(moment(userData.accessedAt).fromNow()); // Last login
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                // dispatch(logout());
            })
            .finally(() => console.log('userData fetch successfull'));
    }, []); // Only run once on mount

    const sheetFooterIcons = [
        {
            tooltip: 'View Source',
            icon: <CodeOutlined sx={{ fontSize: 36 }} className={`bg-primary/0 hover:bg-green-500/10 text-secondary-foreground hover:text-green-500 ${SheetFooterIconStyle}`} />,
        },

        {
            tooltip: 'I post my work here',
            icon: <Instagram sx={{ fontSize: 36 }} className={`bg-primary/0 hover:bg-pink-500/10 text-secondary-foreground hover:text-pink-500 ${SheetFooterIconStyle}`} />,
        },

        {
            tooltip: 'Sticker Store',
            icon: <StorefrontOutlined sx={{ fontSize: 36 }} className={`bg-primary/0 hover:bg-sky-500/10 text-secondary-foreground hover:text-sky-500 ${SheetFooterIconStyle}`} />,
        },
        {
            tooltip: 'Support',
            icon: <VolunteerActivismOutlined sx={{ fontSize: 36 }} className={`bg-primary/0 hover:bg-red-500/10 text-secondary-foreground hover:text-red-500 ${SheetFooterIconStyle}`} />,
        },
    ];
    const bottomNavItems = [
        {
            name: 'Menu',
            // slug: '#',
            icon: (
                <Sheet>
                    <SheetTrigger asChild>
                        <PanelRightClose />
                        {/* <div className="flex flex-col text-sm text-accent-foreground font-semibold justify-center items-center ">
                        <span className={commonBottomNavItemNameStyle}>Menu</span>
                    </div> */}
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col justify-between ">
                        <div>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link to="/">
                                        <div className="flex">Burning Notes</div>
                                    </Link>
                                </SheetTitle>

                                <SheetDescription className="text-left">Made with {<FavoriteOutlined sx={{fontSize:14}}/> } by Manmeet Singh</SheetDescription>
                            </SheetHeader>
                            {/* side nav links */}
                            <div className="flex flex-col mt-4 -ml-4">
                                {sideNavItems.map((item) =>
                                    item.active ? (
                                        <Link
                                            key={item.name}
                                            to={item.slug}
                                            className={`py-3 pl-4 gap-1 inline-flex items-center justify-start rounded-full  font-medium transition-colors   hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary
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
                                <div className="flex justify-evenly">
                                    {sheetFooterIcons.map((items) => (
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

                                <div className="flex gap-4 items-center">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage className="rounded-full" src={avatarURL} alt={userData.name} />
                                        <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{userData.name}</span>
                                        <span className="truncate text-xs">{userData.email}</span>
                                        <span className="truncate text-xs font-medium">
                                            {' '}
                                            Last login <span>{moment(userData.accessedAt).fromNow()} </span>
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
            ),
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
            name: 'About',
            slug: '/about',
            icon: <InfoOutlined />,
        },
    ];

    return (
        <>
            <footer className="fixed px-4 bottom-0 py-2 container bg-accent text-accent-foreground">
                <div className="flex justify-between items-center">
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
