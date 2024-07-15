import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Overview from "@/components/Overview";
import Customers from "@/components/Customers";
import Settings from "@/components/Settings";
import Account from "@/components/Account";
import Orders from "@/components/Orders";
import Header from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-[22%]">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
