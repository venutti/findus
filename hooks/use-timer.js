import { useState, useEffect } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  return {
    time,
    isRunning,
    isPaused,
    start: () => setIsRunning(true),
    pause: () => setIsPaused(true),
    resume: () => setIsPaused(false),
    reset: () => setTime(0),
  };
}
