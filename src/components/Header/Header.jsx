import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Brightness1, Brightness7, DarkMode, FireplaceSharp, LightMode } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { LogoutButton } from "../index";

const Header = () => {
    const { setTheme } = useTheme();

    // retrieving th status of authentication state
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);

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

    return (
        <>
            <header className=" pl-4 pr-0 pt-2 flex justify-between items-center mb-4">
                {/* {navItems.map((item) => {
        item.active ? (
          <li key={item.name}>
            <button onClick={() => navigate(item.slug)}>{item.icon}{item.name}</button>
          </li>
        ) : (
          "null"
        );
      })} */}

                <div className="flex gap-2  container">
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
                            <span className=" mr-2 -mt-0.5">
                                <FireplaceSharp sx={{ fontSize: 24 }} />
                            </span>
                            Mistwrite
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
                    <Button variant="icon" onClick={() => setTheme('light')}
                     className=" scale-0 dark:scale-100 transition-all">
                        <DarkMode/>
                        {/* <span className='font-medium ml-2'>Dark</span> */}
                    </Button>
                    <Button variant="icon" onClick={() => setTheme('dark')}
                     className=" absolute scale-100 dark:scale-0 transition-all">
                        <Brightness7 />
                        {/* <span className='font-medium ml-2'>Light</span> */}
                    </Button>
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
