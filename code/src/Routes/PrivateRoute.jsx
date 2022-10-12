import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../auth/Auth";

export const PrivateRoute = ({ children }) => {
  if (!Auth?.isUserAuthenticated()) {
    return <Navigate to="/" replace={true} />;
  }

  if (Auth.isUserAuthenticated()) {
    return children;
  }
};
