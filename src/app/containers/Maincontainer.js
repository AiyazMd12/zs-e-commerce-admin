import React,{useEffect} from "react";
import { useRoutes } from 'react-router-dom';
import Layout from './Layout';
import BannerUpload from "../components/BannerUpload.js/BannerUpload";
import { Navigate } from 'react-router-dom';
import LoginPage from "../components/login/LoginPage";
import LogOutPage from "../components/login/LogOutPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Products from "../components/Products/Products";
import { useDispatch, useSelector } from 'react-redux';
import Login from "../components/login/Login"
import { logout, checkAuth } from '../../redux/action/authActions';
const MainContainer = () => {
  const dispatch = useDispatch();
  // const isAuthenticated = true; // Replace with auth logic
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuth()); // Check token on app load
  }, [dispatch]);


  const routes = useRoutes([
    {
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: '/', element: <BannerUpload /> },
        { path: '/dashboard', element: <Dashboard /> },
        // { path: '/products', element: <Products /> },
        // { path: '/orders', element: <Orders /> },
      ],
    },
    { path: '/login', element: <Login /> },
    // { path: '*', element: <NotFound /> },
  ]);
  return routes;
};

export default MainContainer;
