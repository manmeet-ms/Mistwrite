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
    VolunteerActivism
} from '@mui/icons-material';
import { PanelRightClose } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authService from '../appwrite/auth';
import LogoutButton from './Header/LogoutButton';

import moment from 'moment';
import { useEffect } from 'react';
const BottomToolbar = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const commonBottomNavIconStyle = 'bg-primary/0 hover:bg-primary/20  px-4 py-1 rounded-full transition-all duration-500 ease-in-out';
    const commonBottomNavItemNameStyle = ' font-medium';
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
                    <SheetContent side="left" className="flex flex-col justify-between overflow-scroll">
                        <div>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link to="/">
                                        <div className="flex">Burning Notes</div>
                                    </Link>
                                </SheetTitle>

                                <SheetDescription className="text-left text-xs">Made with {<FavoriteOutlined sx={{ fontSize: 14 }} />} by Manmeet Singh</SheetDescription>
                            </SheetHeader>
                            {/* side nav links */}
                            <div className="flex flex-col  mt-4 ">
  
  {sideNavItems[0].active ? (<Link to={sideNavItems[0].slug} className={commonSideNavLinkStyle}> {sideNavItems[0].icon} {sideNavItems[0].name}</Link> ) : null}
  {sideNavItems[1].active ? (<Link to={sideNavItems[1].slug} className={commonSideNavLinkStyle}> {sideNavItems[1].icon} {sideNavItems[1].name}</Link> ) : null}
  {sideNavItems[2].active ? (<Link to={sideNavItems[2].slug} className={commonSideNavLinkStyle}> {sideNavItems[2].icon} {sideNavItems[2].name}</Link> ) : null}
  
  
  {sideNavItems[3].active ? (<Link to={sideNavItems[3].slug} className={commonSideNavLinkStyle}> {sideNavItems[3].icon} {sideNavItems[3].name}</Link> ) : null}
    <Separator className="my-2 " />
    <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">
      Network</span>  </div>
  {sideNavItems[9].active ? (<Link to={sideNavItems[9].slug} className={commonSideNavLinkStyle}> {sideNavItems[9].icon} {sideNavItems[9].name}</Link> ) : null}
  {sideNavItems[5].active ? (<Link to={sideNavItems[5].slug} className={commonSideNavLinkStyle}> {sideNavItems[5].icon} {sideNavItems[5].name}</Link> ) : null}<div>
  {sideNavItems[4].active ? (<Link to={sideNavItems[4].slug} className={commonSideNavLinkStyle}> {sideNavItems[4].icon} {sideNavItems[4].name}</Link> ) : null}
  {sideNavItems[8].active ? (<Link to={sideNavItems[8].slug} className={commonSideNavLinkStyle}> {sideNavItems[8].icon} {sideNavItems[8].name}</Link> ) : null}
  <div>
    <Separator className="my-2 " />
    <span className="px-4 py-2 mb-2 -ml-4 uppercase font-semibold tracking-widest text-xs text-secondary-foreground/50">
      Other</span>  </div>
  {sideNavItems[11].active ? (<Link to={sideNavItems[11].slug} className={commonSideNavLinkStyle}> {sideNavItems[11].icon} {sideNavItems[11].name}</Link> ) : null}
  {sideNavItems[6].active ? (    <Link to={sideNavItems[6].slug} className={commonSideNavLinkStyle}>      {sideNavItems[6].icon} {sideNavItems[6].name}    </Link>  ) : null}
  {sideNavItems[10].active ? (<Link to={sideNavItems[10].slug} className={commonSideNavLinkStyle}> {sideNavItems[10].icon} {sideNavItems[10].name}</Link> ) : null}
  {sideNavItems[7].active ? (<Link to={sideNavItems[7].slug} className={commonSideNavLinkStyle}> {sideNavItems[7].icon} {sideNavItems[7].name}</Link> ) : null}
  {/* {sideNavItems.map((item) =>
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
                                )} */}
</div>

                        </div>
                        <SheetFooter>
                            <div className="flex flex-col gap-4">
                                <Separator />
                                <div className="flex gap-4 items-center">
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage className="rounded-full" src={avatarURL} alt={userData.name} />
                                        <AvatarFallback className="rounded-full">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{userData.name}</span>
                                        <span className="truncate text-xs">{userData.email}</span>
                                        <span className="truncate text-xs font-medium">
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
