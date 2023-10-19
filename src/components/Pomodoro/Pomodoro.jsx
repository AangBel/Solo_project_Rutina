import React, { useState, useEffect } from "react";
import cuteTomato from "../images/cuteTomato.png";
import "./Pomodoro.css";

const Pomodoro = () => {
  const [timer, setTimer] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setIsActive(false);
      setIsBreak((prevState) => !prevState);
      setTimer(isBreak ? 5 * 60 : 25 * 60);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer, isBreak]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimer(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
    <div className="spaceUnderCard">

    
      <div className="squishCardClass">
        <div className="tomatoCard">
          <div className="card-container-pomodoro">
            <img src={cuteTomato} className="tomato" alt="Tomato" />
            <h1>{isBreak ? "Break" : "Work"}</h1>
            <h2>{formatTime(timer)}</h2>
            <div className="button-container">
              {!isActive && (
                <button onClick={handleStart} className="learn-more">
                  Start
                </button>
              )}
              {isActive && (
                <button onClick={handleReset} className="learn-more">
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Pomodoro;
