import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// CSS-----------------------------------------------------------

import "./AddBell.css";

// DAY.JS--------------------------------------------------------
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Chicago");

const localTime = dayjs().format("YYYY-MM-DD"); 
console.log("this is local Time", localTime);

// SWEET ALERT----------------------------------------------------
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

// ---------------------------------------------------------------

const AddBell = () => {
  console.log("in the add bell const under addBell.jsx");
  const history = useHistory();
  const dispatch = useDispatch();

  const [bellName, setBellName] = useState("");
  const [bellTime, setBellTime] = useState("");

  function addBellEvent(event) {
    event.preventDefault();

    const bellPackage = {
      timer_name: bellName,
      time: bellTime,
      status: false,
      userId: 1,
    };
 
    function formatTime(time) {
      const date = new Date();
      const timeParts = time.split(":");
      date.setHours(parseInt(timeParts[0], 10));
      date.setMinutes(parseInt(timeParts[1], 10));

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }
    
    MySwal.fire({
      title: "New Bell Created",
      icon: "success",
      confirmButtonText: "Ok",
      showCloseButton: true,
      html: `
        <div>
            <p>Bell Name: ${bellName}</p>
            <p>Time: ${formatTime(bellTime)}</p>
        </div>
      `,
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.close) {
        dispatch({
          type: "ADD_BELL",
          payload: bellPackage,
        });
        history.push("/Bells");
      }
    });

    console.log("this is from the addBell event function in add Bell ");
    console.log("this is the bellPackage:", bellPackage);
  }

  function cancelAddBell() {
    history.push("/Bells");
  }
  return (
    <div className="containerBell">
      <div className="taskInputBell">
        <div className="contentBell">
          <h6>Bell Name:</h6>
          <input
            id="bellNameInput"
            type="text"
            onChange={(e) => setBellName(e.target.value)}
          />
          <h6>Time:</h6>
          <input
            id="endTimeInput"
            type="time"
            onChange={(e) => setBellTime(e.target.value)}
          />

          <div className="button-containerBell">
            <button className="AddBellButton" onClick={addBellEvent}>
              Add Bell
            </button>
            <button onClick={cancelAddBell} className="CancelBtnBell">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBell;
