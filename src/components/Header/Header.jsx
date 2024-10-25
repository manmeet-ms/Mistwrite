import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import React from "react";

import {
  LocalFireDepartmentOutlined,
  Menu
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { LogoutButton } from "../index";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { setTheme } = useTheme()

  // retrieving th status of authentication state
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Notes",
      slug: "/notes",
      active: authStatus,
    },
    {
      name: "Create note",
      slug: "/add-note",
      active: authStatus,
    },
  ];

  return (
    <>
      {navItems.map((item) => {
        item.active ? (
          <li key={item.name}>
            <button onClick={() => navigate(item.slug)}>{item.name}</button>
          </li>
        ) : (
          "null"
        );
      })}
      <header className="flex justify-between items-center  pb-2">
     <div className="flex gap-x-2">
     <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link to="/">
                  <div className="flex">
                    Burning Notes
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
        </Sheet>

        {/* <div className="flex">
                  Burning Notes
                  <img
                    className="w-6 h-6"
                    src="https://cdn3.emoji.gg/emojis/7251-blue-flames.gif"
                    alt=""
                />
                </div> */}

<Link to="/">Burning Notes</Link>
{/* 
        <Link to="/">
          {userData ?
          <div className="flex">Burning Notes</div>
          :
          (<span className="flex flex-col">
            <span className="text-sm" >  {userData.name}</span>
          </span>)}
        </Link>  */}
     </div>
        {/* <div className="text-slate-500">{`Logged in? ${authStatus}`}</div> */}
        {/* <div className="">{`Logged in? authstatus:${authStatus} ${(useSelector((state) => state.auth.status))}`}</div> */}
        {/* {authStatus && <LogoutButton />} */}

        {authStatus ? (
          <LogoutButton />
        ) : (null
          // <Button variant="ghost">
          //   <Link to="/login">Login</Link>
          // </Button>
        )}
        {/* {authStatus && (
          <Button variant="ghost">
            <Link to="/login">Login</Link>
          </Button>
        )} */}
  
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
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
    </DropdownMenu>
      </header>
    </>
  );
};

export default Header;
