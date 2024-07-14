import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../utils/api";
import constants from "./constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false)); // Run the auth function else catch error
  }, []);

  // This function refreshes the token automatically when it expires
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(constants.REFRESH_TOKEN); // get Refresh token from local stotage
    try {
      const res = await api.post("/api/token/refresh/", {
        // sending post request to backend for new ACCESS Token
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(constants.ACCESS_TOKEN, res.data.access); // store ACCESS token in local storage
        setIsAuthorized(true); // set isAuthorized to true as we have an access token
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  // This function checks if ACCESS token expires or not. if so, then call the refresh token function
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded = jwtDecode(token); // Decode the access token
    const tokenExpiration = decoded.exp; // Access its expiration date
    const now = Date.now() / 1000; // Convert date to seconds

    if (tokenExpiration < now) {
      // if tokens expiration date is small them date now, means if expired
      await refreshToken(); // call refresh token function
    } else {
      setIsAuthorized(true); // if not expired, then set isAuthorized to true
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />; // if user isAuthorized then show the children means the components that are wrapped by this ProtectedRoute wrapper Else redirect to login page
}

export default ProtectedRoute;
