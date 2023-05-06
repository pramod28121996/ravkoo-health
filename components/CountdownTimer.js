"use client";
import React, { useState, useEffect } from "react";

function CountdownTimer({ h, m, s, handleStopCountDown }) {
  const [remainingTime, setRemainingTime] = useState(0);

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime === 0) {
        clearInterval(timer);
        handleStopCountDown();
      } else setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  useEffect(() => {
    calculateSeconds();
  }, [h, m, s]);

  const calculateSeconds = () => {    
    const timeH = h !== 0 ? h * 60 * 60 * 1000 : 0;
    const timeM = m !== 0 ? m * 60 * 1000 : 0;
    const timeS = s !== 0 ? s * 1000 : 0;

    setRemainingTime(timeH + timeM + timeS);
  };
  return (
    <div>
      {hours}h {minutes}m {seconds}s
    </div>
  );
}

export default CountdownTimer;
