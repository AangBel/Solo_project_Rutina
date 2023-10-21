import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

import "./Bells.css";

function Bells() {
  console.log("in the bells function");
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch({ type: "FETCH_BELLS" });
  }, []);

  const bells = useSelector((state) => state.bells);
  console.log("this is bells", bells);

  const bellStore = useSelector((state) => state.bellStore);
  console.log("this is the bellStore", bellStore);

  const bellReducer = useSelector((state) => state.bellReducer);
  console.log("this is the bellReducer", bellReducer);

  const handleBellSelect = (bell) => {
    console.log("this is bell under handleBellSelect", bell);
    dispatch({ type: "SET_ALL_BELLS", payload: bell });
  };

  function addBellOnClick() {
    console.log("clicked to add Bell");
    history.push("/AddBell");
  }

  function addPomodoro() {
    console.log("clicked to add Pomodoro");
    history.push("/Pomodoro");
  }
  function editBellOnClick(bell) {
    console.log("clicked to edit bell");
    console.log("this is edit bell on click bell", bell);

    handleEditBell(bell);
  }
  const handleEditBell = (bellId) => {
    console.log("this is bellId in handleEditBell:", bellId);

    dispatch({ type: "SELECTED_BELL_TO_EDIT", payload: bellId });
    history.push("/EditBell");
  };

  function deleteBellOnClick(bellId) {
    console.log("the delete bell button has been clicked");
    dispatch({ type: "DELETE_BELL_REQUEST", payload: bellId });
    // dispatch({ type: "DELETE_BELL", payload: { id: bellId } });
  }

  function formatTime(time) {
    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  return (
    <>
      <header style={{ background: "#CEE9f1" }}>
        <div className="toolbar">
          <button className="learn-more" onClick={addBellOnClick}>
            Add Bell
          </button>
          <button className="learn-more" onClick={addPomodoro}>
            Add Pomodoro
          </button>
        </div>
      </header>

      <div className="BellDiv">
        {isLoading ? (
          <div className="loader-container">
            <PacmanLoader color={"#123abc"} loading={isLoading} />
          </div>
        ) : (
          <div className="BellClassMap">
            {bellReducer.map((bell) => (
              <div className="bellCard" key={bell.id}>
                <h5>{bell.timer_name}</h5>
                <ul>
                  <li>{`Time: ${formatTime(bell.time)}`}</li>
                </ul>
                <button
                  className="learn-more"
                  onClick={() => editBellOnClick(bell.id)}
                >
                  EDIT
                </button>
                <button
                  className="learn-more"
                  onClick={() => deleteBellOnClick(bell.id)}
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Bells;
