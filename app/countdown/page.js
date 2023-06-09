"use client";
import CountdownTimer from "@/components/CountdownTimer";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";

function Countdown() {
  //useRef declaration for access input controls.
  //Reason behind ti taking useRef instead of state is we want the time start when submit button get hit;
  const hourInput = useRef(0);
  const minuteInput = useRef(0);
  const secondInput = useRef(0);

  //State declaration
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  //This function execute when time is over
  //Reason to implement this function is to reinitialize timer values.
  const handleStopCountDown = () => {
    setTime({ h: 0, m: 0, s: 0 });
    hourInput.current.value = "";
    minuteInput.current.value = "";
    secondInput.current.value = "";
  };

  //Function calling
  const handleOnClick = () => {
    setTime({
      h: parseInt(hourInput.current.value === "" ? 0 : hourInput.current.value),
      m: parseInt(
        minuteInput.current.value === "" ? 0 : minuteInput.current.value
      ),
      s: parseInt(
        secondInput.current.value === "" ? 0 : secondInput.current.value
      ),
    });
  };
  
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.input}>
          <label htmlFor="hours">Hours:</label>
          <input
            id="hour"
            type="number"
            min={0}
            placeholder="Hours"
            ref={hourInput}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="minute">Minutes:</label>
          <input
            id="minute"
            type="number"
            min={0}
            placeholder="Minutes"
            ref={minuteInput}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="second">Second:</label>
          <input
            id="second"
            type="number"
            min={0}
            placeholder="Second"
            ref={secondInput}
          />
        </div>
        <div className={styles.input}>
          <button onClick={handleOnClick}>Start</button>
        </div>
      </div>
      <div className={styles.flex}>
        <CountdownTimer
          h={time.h}
          m={time.m}
          s={time.s}
          handleStopCountDown={handleStopCountDown}
        />
      </div>
    </div>
  );
}

export default Countdown;
