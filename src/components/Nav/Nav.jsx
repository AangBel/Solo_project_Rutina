import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import RightNow from '../../RightNow/RightNow';

function Nav() {
  const user = useSelector((store) => store.user);

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
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/MyDay">
              My Day
            </Link>
            
            <Link className="navLink" to="/RightNow">
              Right Now
            </Link>

            <Link className="navLink" to="/Bells">
              Bells
            </Link>


            <LogOutButton className="navLink" />
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
