import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppC from './AppC';
import AppS from './AppS';
import Login from './components/Login';
import LoginS from './components/LoginS';
import Register from './components/Register';
import RegisterS from './components/RegisterS';
import DashboardUser from './components/DashboardUser';
import Error from './components/error';
import DashboardUser1 from './components/DashboardUser1';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/customer",
    element: <AppC/>,
  },
  {
    path: "/seller",
    element: <AppS/>,
  },
  {
    path: "/seller/login",
    element: <LoginS/>,
  },
  {
    path: "/seller/register",
    element: <RegisterS/>,
  },
  
  {
    path: "/customer/login",
    element: <Login/>,
  },
  {
    path: "/customer/register",
    element: <Register/>,
  },
  {
    path: "/customer/dashboard",
    element: <DashboardUser/>,
  },
  {
    path: "/seller/dashboardSeller",
    element: <DashboardUser1/>,
  },
  {
    path: "/*",
    element: <Error/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);