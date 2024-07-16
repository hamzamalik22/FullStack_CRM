import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      <Route
        path="/dashboard/*"
        element={<ProtectedRoute> {<Dashboard />} </ProtectedRoute>}
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes> 
  );
};

export default Router;
