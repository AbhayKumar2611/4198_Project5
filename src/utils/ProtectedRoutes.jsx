import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile";

const ProtectedRoutes = ({ children }) => {
  const currentUser = localStorage.getItem("currentUser");
  return currentUser ? children : <Navigate to="/Profile" />;
};

export default ProtectedRoutes;
