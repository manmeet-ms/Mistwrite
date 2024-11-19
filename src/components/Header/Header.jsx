import React, { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';

import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Brightness7, CloudCircle, DarkMode, FireplaceSharp, MenuOpen, SettingsSuggest, SettingsSystemDaydream } from '@mui/icons-material';
import { AccountCircle, AccountTree, Email, FavoriteOutlined, GitHub, Home, Instagram, LinkedIn, PersonAddAlt, RateReview, Store, VolunteerActivism } from '@mui/icons-material';
import { Menu, PanelRightClose } from 'lucide-react';
import authService from '../../appwrite/auth';
import { Menu1, Menu2, Menu3, Menu4, Menu5, Menu6 } from '../Menucomponent';
import LogoutButton from './LogoutButton';

const Header = () => {
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
            console.log('url fetched', url);
            setUserAvatarURL(url);
        });
        console.log(response);
    };
    useEffect(() => {
        getProfile();
        authService
            .getCurrentUser()
            .then((userData) => {
                console.log(userData.name);
                console.log(userData.email);
                console.log(moment(userData.accessedAt).fromNow()); // Last login
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
    // retrieving th status of authentication state

    const navigate = useNavigate();
    // const navItems = [
    //   {
    //     name: "Home",
    //     slug: "/",
    //     icon:<Home/>,
    //     active: authStatus,
    //   },
    //   {
    //     name: "Login",
    //     slug: "/login",
    //     icon:<Home/>,
    //     active: !authStatus,
    //   },
    //   {
    //     name: "Signup",
    //     slug: "/signup",
    //     icon:<Home/>,
    //     active: !authStatus,
    //   },
    //   {
    //     name: "Notes",
    //     slug: "/notes",
    //     icon:<Home/>,
    //     active: authStatus,
    //   },
    //   {
    //     name: "Create note",
    //     slug: "/add-note",
    //     icon:<Home/>,
    //     active: authStatus,
    //   },
    // ];
    const svg = [
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        <Menu1 />,
        <Menu2 />,
        <Menu3 />,
        <Menu4 />,
        <Menu5 />,
        <Menu6 />,
    ];
    return (
        <>
            <header className="sticky top-0 bg-background/10 backdrop-blur-lg pl-4 pr-0 py-2 flex justify-between items-center mb-4">
                {/* {navItems.map((item) => {
        item.active ? (
          <li key={item.name}>
            <button onClick={() => navigate(item.slug)}>{item.icon}{item.name}</button>
          </li>
        ) : (
          "null"
        );
      })} */}

                <div className="flex gap-2 items-center container ">
                    <div className="rounded-full w-48 h-32 absolute blur-3xl  bg-primary/40 -top-16 -left-16 z-99 "></div>
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* <MenuOpen/> */}
                            <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M5 17H13M5 12H19M11 7H19" stroke="currentColor" strokeWidth={2.5} stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                            {/* <svg className='w-6 h-6' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.25">
        <g stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000"></path><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000"></path><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000"></path></g></svg> */}

                            {/* <div className="flex flex-col text-sm text-accent-foreground font-semibold justify-center items-center ">
                        <span className={commonBottomNavItemNameStyle}>Menu</span>
                    </div> */}
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
                    {/* <Sheet>
          <SheetTrigger asChild>
            <Menu  className="text-secondary-foreground mt-0.5" sx={{fontSize:20
            }} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link to="/">
                  <div className="flex">
                    Mistwrite
                    <LocalFireDepartmentOutlined/>
                  </div>
                </Link>
              </SheetTitle>

              <SheetDescription className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                deleniti!
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col">
              {navItems.map((item) =>
                item.active ? (
                  <Link
                    key={item.name}
                    to={item.slug}
                    className={`py-2 px-4 mt-1 inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground ${
                      item.active ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : null
              )}
            </div>
            <SheetFooter>
              <SheetClose asChild>{authStatus && <LogoutButton />}</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet> */}

                    {/* <div className="flex">
                  Mistwrite
                  <img
                    className="w-6 h-6"
                    src="https://cdn3.emoji.gg/emojis/7251-blue-flames.gif"
                    alt=""
                />
                </div> */}
                    <Link to="/">
                        <h1 className="flex items-center text-xl font-bold text-secondary-foreground">
                            Mistwrite
                            {/* <FireplaceSharp className="ml-1 mr-2 -mt-0.5" sx={{ fontSize: 24 }} /> */}
                            {/* <span className=" ml-2 -mt-0.5"><FireplaceOutlined sx={{fontSize:22}}  /></span> */}
                        </h1>
                    </Link>
                </div>
                {/* check login status */}
                {/* <div className="text-slate-500">{`Logged in? ${authStatus}`}</div> */}
                {/* <div className="">{`Logged in? authstatus:${authStatus} ${(useSelector((state) => state.auth.status))}`}</div> */}
                {/* {authStatus && <LogoutButton />} */}
                {/* {authStatus && (
          <Button variant="ghost">
            <Link to="/login">Login</Link>
          </Button>
        )} */}

                {/* show if necessary logout button */}
                {/* {authStatus ? (
          <LogoutButton />
        ) : null} */}
                {/* <Button onClick={() => setTheme("light")} > <LightMode className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /></Button>
          <Button onClick={() => setTheme("dark")} > <DarkMode className="  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /></Button>
       */}
                <div className="flex flex-col">
                    <Button variant="icon" onClick={() => setTheme('light')} className="absolute opacity-0 dark:opacity-100  scale-0 dark:scale-100 "><DarkMode /></Button>
                    <Button variant="icon" onClick={() => setTheme('dark')} className="  scale-100 dark:scale-0 "><Brightness7 /></Button>
                </div>
                {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
 
        <Button className='px-3' variant="ghost" size="icon">
          <LightMode className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <DarkMode className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> 
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
            </header>
        </>
    );
};

export default Header;
