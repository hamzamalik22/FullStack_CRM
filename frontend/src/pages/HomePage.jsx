import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  LineChart,
  CheckSquare,
  MessageCircle,
  Menu,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dashboard from "../images/Dashboard.png";

const HomePage = () => {
  const [theme, setTheme] = useState("light");

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

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="hidden md:block bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              <Link to="/">CRMAX</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4"
              >
                Register
              </Link>
              <a
                target="_blank"
                href="https://groqunofficial.vercel.app/about"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4"
              >
                About
              </a>
              <div className="flex items-center">
                <Switch onClick={handleThemeSwitch} />
              </div>
            </div>
          </div>
        </nav>
        <nav className="block md:hidden bg-white dark:bg-gray-800 shadow-lg p-3 fixed w-full z-10">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              <Link to="/">CRMAX</Link>
            </div>
            <div className="flex gap-4 flex-row-reverse">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Menu />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link
                        to="/login"
                        className="text-gray-800 dark:text-gray-200 rounded hover:underline hover:text-purple-500  py-2 px-4"
                      >
                        Login
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {" "}
                      <Link
                        to="/register"
                        className="text-gray-800 dark:text-gray-200 rounded hover:underline hover:text-purple-500 py-2 px-4"
                      >
                        Register
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {" "}
                      <a
                        target="_blank"
                        href="https://groqunofficial.vercel.app/about"
                        className="text-gray-800 dark:text-gray-200 rounded hover:underline hover:text-purple-500 py-2 px-4"
                      >
                        About
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Switch onClick={handleThemeSwitch} />
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto  flex flex-col lg:flex-row items-center min-h-screen pt-20 py-12 lg:py-24 px-6">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 md:text-5xl">
              Welcome to{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                CRMAX
              </span>
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
              CRMAX helps you manage your customer relationships with ease.
              Track interactions, streamline processes, and grow your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
              >
                Get Started
              </Link>
              <Link
                to="/dashboard"
                className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-6 py-3 rounded-lg shadow hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src={dashboard}
              alt="CRM Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <section className="bg-white dark:bg-gray-800 py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 md:text-4xl text-center">
              Key Features
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <Users className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Customer Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Keep track of all your customer interactions in one place.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <LineChart className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Sales Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Gain insights into your sales performance with detailed
                  analytics.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center">
                <CheckSquare className="text-4xl text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Task Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Stay organized with tasks and reminders.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 md:text-4xl text-center">
              Customer Testimonials
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
                <MessageCircle className="text-4xl text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mt-2 italic">
                  "CRMAX has transformed how we manage our customer
                  relationships. Highly recommended!"
                </p>
                <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  John Doe
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  CEO, Example Corp
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
                <MessageCircle className="text-4xl text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mt-2 italic">
                  "The sales analytics feature is a game-changer for our
                  business."
                </p>
                <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Jane Smith
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Marketing Manager, ABC Ltd
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
                <MessageCircle className="text-4xl text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mt-2 italic">
                  "CRMAX helps us stay on top of our tasks and manage our team
                  efficiently."
                </p>
                <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Emily Johnson
                </h4>
                <p className="text-gray-600 dark:text-gray-300">COO, XYZ Inc</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
