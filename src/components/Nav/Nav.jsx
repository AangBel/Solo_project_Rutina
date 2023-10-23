import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
// import RightNow from '../../RightNow/RightNow';

function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Rutina</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
          <div>

            <Link to="/user" className={location.pathname === "/user" ? "navLink active" : "navLink"} >
              Home
            </Link>

            <Link to="/MyDay" className={location.pathname === "/MyDay" ? "navLink active" : "navLink"}>
              My Day
            </Link>
            
            <Link to="/RightNow" className={location.pathname === "/RightNow" ? "navLink active" : "navLink"}>
              Right Now
            </Link>

            <Link to="/Bells" className={location.pathname === "/Bells" ? "navLink active" : "navLink"}>
              Bells
            </Link>

            <LogOutButton className="navLink" />
          </div>
          </>
        )}

        {/* <Link className="navLink" to="/Bells">
          BellsOutsideLogi
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
