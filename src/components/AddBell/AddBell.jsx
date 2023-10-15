import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddBell = () => {
  console.log("in the add bell const under addBell.jsx");
  const history = useHistory();
  const dispatch = useDispatch();

  const [bellName, setBellName] = useState("");
//   const [bellStartTime, setBellStartTime] = useState("");
  const [bellEndTime, setBellEndTime] = useState("");

  function addBellEvent(event) {
    event.preventDefault();

    const bellPackage = {
      timer_name: bellName,
    //   bell_start: bellStartTime,
      bell_end: bellEndTime,
      status: false,
      userId: 1,
    };

    dispatch({
      type: "ADD_BELL",
      payload: bellPackage,
    });
    history.push("/Bells");
  }
  function cancelAddBell(){
    history.push("/Bells");
  }
  return (
    <div className="container">
      <div className="paper">
        <div className="content">
          <h6>Bell Name</h6>
          <input
            id="bellNameInput"
            type="text"
            onChange={(e) => setBellName(e.target.value)}
          />

          {/* <h6>Start Time:</h6>
          <input
            id="startTimeInput"
            type="datetime-local"
            onChange={(e) => setBellStartTime(e.target.value)}
          /> */}

          <h6>End Time:</h6>
          <input
            id="endTimeInput"
            type="datetime-local"
            onChange={(e) => setBellEndTime(e.target.value)}
          />

          <div className="button-container">
            <button className="AddTaskButton" onClick={addBellEvent}>
              Add Bell 
            </button>
            <button onClick={cancelAddBell}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddBell;
