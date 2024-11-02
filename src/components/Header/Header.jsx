import { useTheme } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LocalFireDepartmentOutlined,
  Menu
} from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { LogoutButton } from "../index";
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
import { Home, Settings } from "lucide-react";

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
      icon:<Home/>,
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      icon:<Home/>,
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      icon:<Home/>,
      active: !authStatus,
    },
    {
      name: "Notes",
      slug: "/notes",
      icon:<Home/>,
      active: authStatus,
    },
    {
      name: "Create note",
      slug: "/add-note",
      icon:<Home/>,
      active: authStatus,
    },
  ];

  return (
    <>
      {navItems.map((item) => {
        item.active ? (
          <li key={item.name}>
            <button onClick={() => navigate(item.slug)}>{item.icon}{item.name}</button>
          </li>
        ) : (
          "null"
        );
      })}
      <header className="flex justify-between items-center mb-4">

     <div className="flex gap-x-2 px-3 py-2 -ml-1 mr-4 container">
     <Sheet>
          <SheetTrigger asChild>
            <Menu  className="text-secondary-foreground mt-0.5" sx={{fontSize:20
            }} />
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
<h1 className="text-secondary-foreground">Burning Notes</h1>

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
        {authStatus ? (
          <LogoutButton />
        ) : null}

      </header>
    </>
  );
};

export default Header;
