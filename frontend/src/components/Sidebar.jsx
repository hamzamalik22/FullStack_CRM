import { MonitorCog } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[22%] h-screen bg-[#121621] text-white">
        <div className="h-[30%]">
          <div className="flex items-center gap-1 pl-10 pt-5">
            <MonitorCog size="25px" />
            <h1 className="text-3xl tracking-tight">
              CR<strong>M</strong>ax
            </h1>
          </div>
          <div className="pt-5">
            <div className="h-14 w-[70%] mx-auto border-zinc-500 border rounded-xl flex flex-col justify-evenly pl-3">
              <p className="text-xs text-zinc-300 font-semibold">Role</p>
              <h1 className="font-semibold">MANAGER</h1>
            </div>
          </div>
        </div>
        <Separator />
        <div className="h-[50%]">
          <nav className="p-5">
            <ul>
              <li>
                <NavLink
                  to="/overview"
                  className="bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="var(--NavItem-icon-active-color)"
                      viewBox="0 0 256 256"
                      font-size="var(--icon-fontSize-md)"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Overview</h1>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[20%] bg-green-400"></div>
      </div>
    </>
  );
};

export default Sidebar;
