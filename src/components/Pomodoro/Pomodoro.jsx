import React, { useState, useEffect } from "react";

const Pomodoro = () => {
    const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (isActive && timer === 0) {
            setIsActive(false);
            setIsBreak(prevState => !prevState);
            setTimer(isBreak ? 5 * 60 : 25 * 60); // 5 minutes break or 25 minutes work
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

    const formatTime = time => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <h1>{isBreak ? "Break" : "Work"}</h1>
            <h2>{formatTime(timer)}</h2>
            {!isActive && (
                <button onClick={handleStart}>Start</button>
            )}
            {isActive && (
                <button onClick={handleReset}>Reset</button>
            )}
        </div>
    );
};

export default Pomodoro;
