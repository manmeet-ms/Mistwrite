import { useTheme } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Moon, Sun } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Bn</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Settings</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        {authStatus ? (
          <LogoutButton />
        ) : (null
          // <Button variant="ghost">
          //   <Link to="/login">Login</Link>
          // </Button>
        )}
</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

      </header>
    </>
  );
};

export default Header;
