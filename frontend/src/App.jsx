import React from "react";
import Router from "./routes/Router";
import { Navigate } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
  }
  return (
    <>
      <Router />
    </>
  );
};

export default App;
