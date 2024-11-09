import React, { useState, useEffect } from "react";
import "./Timer.css"; // Importing the Timer.css file

const Timer = ({ taskId, onTimeUpdate }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        onTimeUpdate(taskId, prevTime + 1); // Update time for the task
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, taskId, onTimeUpdate]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
    onTimeUpdate(taskId, 0); // Reset time for the task
  };

  return (
    <div className="timer">
      <p>{`Time: ${time}s`}</p>
      <button
        onClick={toggleTimer}
        className={`start-button ${isActive ? "pause-button" : ""}`}
      >
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default Timer;
