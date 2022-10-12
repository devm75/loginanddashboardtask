import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../auth/Auth";

export const PublicRoute = ({ children }) => {
  if (Auth.isUserAuthenticated()) {
    return <Navigate to="/home" replace={true} />;
  }
  if (!Auth.isUserAuthenticated()) {
    return children;
  }
};
