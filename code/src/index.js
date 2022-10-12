import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { InnerLayout } from "./components/wrapper/InnerLayout";
import { Profile } from "./components/Profile";
import { Login } from "./components/Login";
import { PublicRoute } from "./Routes/PublicRoute";
import { PrivateRoute } from "./Routes/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <InnerLayout>
              <Profile />
            </InnerLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
