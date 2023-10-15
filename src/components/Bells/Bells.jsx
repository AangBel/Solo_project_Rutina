import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Bells() {
  console.log("in the bells function");
  const history = useHistory();
  const dispatch = useDispatch();

  const bellStore = useSelector((state) => state.bellStore);
  console.log("this is the bellStore", bellStore);

  const bells = useSelector((state) => state.bells);
  console.log("this is bells", bells);



  useEffect(() => {
    dispatch({ type: "FETCH_BELLS" });
    // console.log('this is Bells', Bells);

    // dispatch({ type: "SET_ALL_BELLS", payload: Bells });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchBells());
  // }, [dispatch]);

  // const handleBellSelect = (bell) => {
  //   dispatch({ type: "SET_ALL_BELLS", payload: bell });
  // };
  function addBellOnClick() {
    console.log("clicked to add Bell");
    // would i call the handle bell select here????
    // handleBellSelect();
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
          {bellStore.map((bell) => (
            <div key={bell.id}>
              <h5>{bell.bell_name}</h5>
              <h5>{bell.timer_name}</h5>

              <ul>
                <li>{`Time: ${bell.time} `}</li>
              </ul>
              <button className="learn-more">EDIT</button>
              <button
                className="learn-more"
                onClick={() => deleteBellOnClick(bell.id)}
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
