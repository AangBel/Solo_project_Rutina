import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Bells() {
  console.log("in the bells function");
  const history = useHistory();
  const dispatch = useDispatch();

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
    // would i call the handle bell select here????
    handleBellSelect();
    history.push("/AddBell");
  }

  function deleteBellOnClick(bell) {
    console.log("the delete bell button has been clicked");
    dispatch({ type: "DELETE_BELL_REQUEST", payload: bell });
  }

  return (
    <>
      <header style={{ background: "#CEE9f1" }}>
        <div className="toolbar">
          <button className="learn-more" onClick={addBellOnClick}>
            Add Bell
          </button>
        </div>
      </header>
      <div className="container">
        <p>This about page is for anyone to read!</p>
        <p>This is now the Bells page</p>
      </div>
      <div className="card shadow">
        <div className="BellClassMap">
          {bellReducer.map((bells) => (
            <div key={bells.id}>
              <h5>{bells.timer_name}</h5>

              <ul>
                <li>{`Time: ${bells.time}`}</li>
              </ul>
              <button className="learn-more">EDIT</button>
              <button
                className="learn-more"
                onClick={() => deleteBellOnClick(bells.id)}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bells;
