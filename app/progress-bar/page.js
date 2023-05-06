"use client";
import React, { useState, useEffect, Fragment } from "react";
import styles from "./page.module.css";
import CountdownTimer from "../countdown/page";

const FormProgressBar = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const progressBarInterval = setInterval(() => {
      if (progressValue === 100) clearInterval(progressBarInterval);
      else setProgressValue((prevValue) => prevValue + 1);
    }, 1000);

    return () => clearInterval(progressBarInterval);
  }, [progressValue]);

  return (
    <div className={styles.main}>
      <progress
        className={styles.progress}
        value={progressValue}
        max="100"
      ></progress>
      <b className={styles.text}>{progressValue}%</b>
    </div>
  );
};

export default FormProgressBar;
