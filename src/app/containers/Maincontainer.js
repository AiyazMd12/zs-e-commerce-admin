import React, { useEffect } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import BannerUpload from "../components/BannerUpload/BannerUpload" // Fix import path
import LoginPage from "../components/login/LoginPage";
import LogOutPage from "../components/login/LogOutPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/login/Login";
import Products from "../components/Products/Products"
import { logout, checkAuth } from "../../redux/action/authActions";

const MainContainer = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth?.isAuthenticated;
  const isLoading = auth?.isLoading; // Assume auth slice has isLoading to track checkAuth status

  useEffect(() => {
    dispatch(checkAuth()); // Check token on app load
  }, [dispatch]);

  // Define routes
  const routes = useRoutes([
    {
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        { path: "/", element: <Navigate to="/bannerupload" replace /> }, //
        { path: "/bannerupload", element: <BannerUpload /> },
        { path: "/dashboard", element: <Dashboard /> },
        // Uncomment these when ready
         { path: "/products", element: <Products /> },
        // { path: "/orders", element: <Orders /> },
      ],
    },
    {
      path: "/login",
      element: isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />,
    },
    {
      path: "/logout",
      element: <LogOutPage />, // Assuming LogOutPage handles logout logic
    },
    {
      path: "*",
      element: <Navigate to={isAuthenticated ? "/bannerupload" : "/login"} replace />, // Handle 404
    },
  ]);

  // Show loading state while checking authentication
  // if (isLoading === undefined || isLoading) {
  //   return <div>Loading...</div>; // Replace with a proper loading component
  // }

  return routes;
};

export default MainContainer;