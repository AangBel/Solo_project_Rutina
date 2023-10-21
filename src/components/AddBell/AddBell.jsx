import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import './AddBell.css';

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

    dispatch({
      type: "ADD_BELL",
      payload: bellPackage,
    });

    console.log("this is from the addBell event function in add Bell ");
    console.log("this is the bellPackage:", bellPackage);

    history.push("/Bells");
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
            <button onClick={cancelAddBell} className="CancelBtnBell">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBell;
