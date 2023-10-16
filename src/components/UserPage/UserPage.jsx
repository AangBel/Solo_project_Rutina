import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './UserPage.css'
import boat from '../images/boat.gif';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="container">
      <img src={boat} alt="boat" />
        <h2 className="welcomeText">Welcome, {user.username}!</h2>
        <p className="idText">Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>
      
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
