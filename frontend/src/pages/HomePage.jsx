import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  LineChart,
  CheckSquare,
  MessageCircle,
  Star,
  Search,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const HomePage = () => {
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

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
          <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                <Link to="/">CRMAX</Link>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      className="hidden"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                    />
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:flex items-center">
              <Link
                to="/login"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4 md:mx-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4 md:mx-2"
              >
                Register
              </Link>
              <a
                target="_blank"
                href="https://groqunofficial.vercel.app/about"
                className="text-gray-800 dark:text-gray-200 rounded hover:bg-indigo-600 hover:text-white py-2 px-4 md:mx-2"
              >
                About
              </a>
              <div className="flex items-center ml-4">
                <Switch onClick={handleThemeSwitch} />
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto flex flex-col lg:flex-row items-center min-h-screen py-12 lg:py-24">
          <div className="lg:w-1/2 text-center lg:text-left px-6">
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
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
              >
                Get Started
              </Link>
              <Link
                to="/dashboard"
                className="ml-4 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-6 py-3 rounded-lg shadow hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
              alt="CRM Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <section className="bg-white dark:bg-gray-800 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 md:text-4xl text-center">
              Key Features
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 md:text-4xl text-center">
              Customer Testimonials
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
