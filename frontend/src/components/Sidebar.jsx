import React, { useEffect, useState } from "react";
import {
  HeartHandshake,
  Menu,
  MonitorCog,
  PieChart,
  Settings,
  Truck,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRole } from "@/store/actions/AgentActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.agent.role);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  return (
    <>
      <div className="fixed md:hidden left-0 top-0 h-full w-16 bg-[#121621] dark:bg-gray-900 text-white dark:text-gray-300 flex flex-col items-center">
        <button onClick={toggleMobileSidebar} className="mt-5">
          <Menu size="25px" />
        </button>
        <NavLink className="mt-5" to="/dashboard/overview">
          <PieChart size="25px" className="my-5" />
        </NavLink>
        <NavLink to="/dashboard/customers">
          <Users size="25px" className="my-5" />
        </NavLink>
        <NavLink to="/dashboard/orders">
          <Truck size="25px" className="my-5" />
        </NavLink>
        <NavLink to="/dashboard/settings">
          <Settings size="25px" className="my-5" />
        </NavLink>
        <NavLink to="/dashboard/account">
          <User size="25px" className="my-5" />
        </NavLink>
      </div>

      <div className="fixed hidden md:block left-0 top-0 h-full w-[22%] bg-[#121621] dark:bg-gray-900 text-white dark:text-gray-300 overflow-hidden">
        <div className="h-[27%]">
          <div className="flex items-center gap-1 pl-10 pt-5">
            <MonitorCog size="25px" />
            <h1 className="text-3xl tracking-tight">
              CR<strong className="text-[35px]">M</strong>AX
            </h1>
          </div>
          <div className="pt-5">
            <div className="h-14 w-[70%] mx-auto border-zinc-500 dark:border-zinc-700 border rounded-xl flex flex-col justify-evenly pl-3">
              <p className="text-xs text-zinc-300 dark:text-zinc-500 font-semibold">
                Role
              </p>
              <h1 className="font-semibold">{role}</h1>
            </div>
          </div>
        </div>

        <hr className="border-zinc-700 dark:border-gray-800" />

        <div className="h-[48%]">
          <nav className="p-5">
            <ul>
              <li>
                <NavLink
                  to="/dashboard/overview"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                      : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                  }
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Overview</h1>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/customers"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                      : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                  }
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      fontSize="var(--icon-fontSize-md)"
                    >
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Customers</h1>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/orders"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                      : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                  }
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      fontSize="var(--icon-fontSize-md)"
                    >
                      <path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.41,34.53a8,8,0,0,1,15.18-5.06l8,24a8,8,0,0,1-15.18,5.06Zm-64,58.94a8,8,0,0,1,10.12-5.06l24,8a8,8,0,0,1-5.06,15.18l-24-8A8,8,0,0,1,24.41,93.47Zm207.18,69.06a8,8,0,0,1-10.12,5.06l-24-8a8,8,0,0,1,5.06-15.18l24,8A8,8,0,0,1,231.59,162.53Zm-64,58.94a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Orders</h1>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                      : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                  }
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      fontSize="var(--icon-fontSize-md)"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Settings</h1>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/account"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                      : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                  }
                >
                  <div className="text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      fontSize="var(--icon-fontSize-md)"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h1>Account</h1>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="border-zinc-700 dark:border-gray-800" />

        <div className="h-[25%]">
          <div className="pl-6 shadow-md rounded-lg p-4 h-[20%]">
            <h2 className="text-lg font-semibold mb-2">Contact for Help</h2>
            <p className="text-zinc-400 mb-2">
              Need assistance? Feel free to contact us for support.
            </p>
            <div className="flex items-center gap-2">
              <HeartHandshake size="20px" />
              <a
                href="tel:+1234567890"
                className="text-green-500 hover:text-green-600 hover:underline transition duration-300"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <>
          <div className="fixed md:hidden left-0 top-0 h-full w-[60%] bg-[#121621] dark:bg-gray-900 text-white dark:text-gray-300 overflow-hidden z-20">
            <div className="h-[27%]">
              <div className="flex items-center gap-1 pl-10 pt-5">
                <MonitorCog size="25px" />
                <h1 className="text-3xl tracking-tight">
                  CR<strong className="text-[35px]">M</strong>AX
                </h1>
              </div>
              <div className="pt-5">
                <div className="h-12 w-[70%] mx-auto border-zinc-500 dark:border-zinc-700 border rounded-xl flex justify-center items-center gap-2 pl-3">
                  <p className="text-xs text-zinc-300 dark:text-zinc-500 font-semibold">
                    Role:
                  </p>
                  <h1 className="font-semibold">{role}</h1>
                </div>
                <hr className="border-zinc-700 dark:border-gray-800 mt-4" />
                <div className="flex justify-center items-center mt-4 cursor-pointer" onClick={toggleMobileSidebar}>
                  <div><Menu  /></div>
                  <div>Menu</div>
                </div>
              </div>
            </div>

            <hr className="border-zinc-700 dark:border-gray-800" />

            <div className="h-[48%]">
              <nav className="p-5">
                <ul>
                  <li>
                    <NavLink
                      to="/dashboard/overview"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                          : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                      }
                    >
                      <div className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h1>Overview</h1>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/customers"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                          : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                      }
                    >
                      <div className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          fontSize="var(--icon-fontSize-md)"
                        >
                          <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h1>Customers</h1>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/orders"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                          : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                      }
                    >
                      <div className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          fontSize="var(--icon-fontSize-md)"
                        >
                          <path d="M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.41,34.53a8,8,0,0,1,15.18-5.06l8,24a8,8,0,0,1-15.18,5.06Zm-64,58.94a8,8,0,0,1,10.12-5.06l24,8a8,8,0,0,1-5.06,15.18l-24-8A8,8,0,0,1,24.41,93.47Zm207.18,69.06a8,8,0,0,1-10.12,5.06l-24-8a8,8,0,0,1,5.06-15.18l24,8A8,8,0,0,1,231.59,162.53Zm-64,58.94a8,8,0,0,1-15.18,5.06l-8-24a8,8,0,0,1,15.18-5.06Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h1>Orders</h1>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/settings"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                          : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                      }
                    >
                      <div className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          fontSize="var(--icon-fontSize-md)"
                        >
                          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h1>Settings</h1>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/account"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-purple-500 mb-3 p-2 rounded-md flex items-center gap-2"
                          : "mb-3 p-2 rounded-md flex items-center gap-2 text-white dark:text-gray-300"
                      }
                    >
                      <div className="text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          fontSize="var(--icon-fontSize-md)"
                        >
                          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h1>Account</h1>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <hr className="border-zinc-700 dark:border-gray-800" />

            <div className="h-[25%]">
              <div className="pl-6 shadow-md rounded-lg p-4 h-[20%]">
                <h2 className="text-lg font-semibold mb-2">Contact for Help</h2>
                <p className="text-zinc-400 mb-2">
                  Need assistance? Feel free to contact us for support.
                </p>
                <div className="flex items-center gap-2">
                  <HeartHandshake size="20px" />
                  <a
                    href="tel:+1234567890"
                    className="text-green-500 hover:text-green-600 hover:underline transition duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
