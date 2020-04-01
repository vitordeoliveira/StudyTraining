import { useState, useEffect } from "react";
import BackgroundTimer from "react-native-background-timer";

const useTimer = defaultValue => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [isActive, setIsActive] = useState(defaultValue);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = BackgroundTimer.setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      BackgroundTimer.clearInterval(interval);
    }
    return () => BackgroundTimer.clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds >= 60) {
      setMinutes(minutes => minutes + 1);
      setSeconds(0);
    }

    if (minutes >= 60) {
      setHour(hour => hour + 1);
      setSeconds(0);
      setMinutes(0);
    }
  }, [seconds]);

  return [seconds, minutes, hour, isActive, toggle, reset];
};

export default useTimer;
