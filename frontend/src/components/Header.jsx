import { LogOut, Search, Settings, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function Logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="flex justify-between items-center pb-2 px-4 p-4">
        <div className="">
          <Search size="20px" />
        </div>
        <div className="flex items-center gap-4">
          <Switch onClick={handleThemeSwitch} />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex gap-1 items-center">
                    <User size="15px" />
                    <Link to="account">Profile</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-1 items-center">
                    <Settings size="15px" />
                    <Link to="settings">Settings</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    onClick={() => Logout()}
                    className="flex gap-1 items-center cursor-pointer"
                  >
                    <LogOut color="red" size="15px" />
                    <p>Logout</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
