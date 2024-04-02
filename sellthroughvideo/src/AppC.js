import React from 'react';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";

function AppC() {

    const [data, setData] = useState(false);

    const { logindata, setLoginData } = useContext(LoginContext);
  
  
    const history = useNavigate();
  
    const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");
  
      const res = await fetch("/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      });
  
      const data = await res.json();
  
      if (data.status == 401 || !data) {
        console.log("user not valid");
      } else {
        console.log("user verify");
        setLoginData(data)
        history("/DashboardUser");
      }
    }
  
    useEffect(() => {
      setTimeout(()=>{
        DashboardValid();
        setData(true)
      },2000)
  
    }, [])
    return (
        <>
      {
        data ? (
          <>
            <Login />

          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>)
}

export default AppC;