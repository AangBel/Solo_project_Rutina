import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



function Bells() {
  console.log("in the bells function");
  const history = useHistory();
  const dispatch = useDispatch();

  function addBellOnClick() {
    //handleTaskSelect();
    console.log("clicked to add Bell");
    history.push("/AddBell");
  }
  return (
    <div className="container">
      <div className="card shadow">
        <p>This about page is for anyone to read!</p>
        <p>This is now the Bells page</p>
      </div>
      <button className="learn-more" onClick={addBellOnClick}>
        Add Bell
      </button>
    </div>
  );
}

export default Bells;
