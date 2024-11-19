// import React from 'react'

// const BottomToolbar = () => {
//   return (
//     <div>BottomToolbar</div>
//   )
// }

// export default BottomToolbar

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Brightness1, Brightness7, DarkMode, FireplaceSharp, LightMode } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
    AccountCircle,
    AccountTree,
    Email,
    Home,
    FavoriteOutlined,
    GitHub,
    InfoOutlined,
    Instagram,
    LayersOutlined,
    LinkedIn,
    PersonAddAlt,
    PostAddTwoTone,
    RateReview,
    Store,
    VolunteerActivism,
    Settings,
    InfoRounded,
    CreateNewFolder,
    Layers
} from '@mui/icons-material';
import { Info, PanelRightClose } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../appwrite/auth';
import LogoutButton from './Header/LogoutButton';

import moment from 'moment';
import { useEffect } from 'react';
const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);


    const navigate = useNavigate();

    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/30  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-[600] ';
    const sideNavIconStyle = 'w-5 h-5 mr-2 ';
    const SheetFooterIconStyle = ' px-2 py-1 rounded-full';
    const commonSideNavLinkStyle = 'py-3 pl-4 gap-1 -ml-4 container  inline-flex items-center justify-start rounded-full  font-medium transition-colors   hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary';

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
            name: 'Projects',
            slug: '#',
            icon: <AccountTree className={sideNavIconStyle} />,
            active: authStatus,
        },

        {
            name: 'Contact',
            slug: '/notes',
            icon: <Email className={sideNavIconStyle} />,
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
        {
            name: 'Feedback',
            slug: '#',
            icon: <RateReview className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'View Source',
            slug: '#',
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
            slug: '#',
            icon: <Store className={sideNavIconStyle} />,
            active: authStatus,
        },
        {
            name: 'Support',
            slug: '#',
            icon: <VolunteerActivism className={sideNavIconStyle} />,
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
    const bottomNavItems = [
       
        {
            name: 'Notes',
            slug: '/',
            icon: <Layers />,
        },
        {
            name: 'Create',
            slug: '/add-note',
            icon: <CreateNewFolder />,
        },
        {
            name: 'About',
            slug: '/about',
            icon: <InfoRounded />,
        },
        {
            name: 'Setting',
            slug: '/about',
            icon: <Settings />,
        },
    ];

    return (
        <>
        <div className="h-16"></div>
            <footer className="fixed bottom-0 px-4 py-2 container bg-accent border-t border-accent rounded-tl-xl rounded-tr-xl">
                <div className="flex justify-between text-xs text-secondary-foreground font-semibold  items-center">
                    {bottomNavItems.map((item) => (
                        <Link className="flex flex-col hover:text-primary justify-center items-center" to={item.slug}>
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
