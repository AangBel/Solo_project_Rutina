import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

import { PacmanLoader } from "react-spinners";

import "./UserPage.css";
import framedBoat from "../images/framedBoat.gif";
import CatInABoat from "../images/CatInABoat.png";
import bubble from "../images/bubble.png";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const isLoading = useSelector((store) => store.isLoading);
  return (
    <>
    <div className="aboveFooter">

   
      <div className="container">
        <div className="card shadow">
          <h2 className="welcomeText">Welcome, {user.username}!</h2>
          {isLoading ? (
            <div className="loader-container">
              <PacmanLoader color={"#123abc"} loading={isLoading} />
            </div>
          ) : (
            <>
              {/* <img src={bubble} alt="a speech bubble" className="bubble" /> */}
              <LogOutButton className="btn" />
              <img src={CatInABoat} alt="Boat bobbing amongst waves gif" />
            </>
          )}
        </div>
      </div> 
      </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
