import { LogOut, Search, Settings, User } from "lucide-react";
import React from "react";
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
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center pb-2 px-4">
        <div className="">
          <Search size="20px" />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Switch />
          </div>
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
                  <div className="flex gap-1 items-center">
                    <LogOut color="red" size="15px" />
                    <Link>Logout</Link>
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
