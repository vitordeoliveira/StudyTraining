import { useState, useEffect } from "react";

const usePress = defaultValue => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [finish, setFinish] = useState(false);
  const [maxtime, setMaxtime] = useState(defaultValue);

  useEffect(() => {
    if (time > maxtime && !finish) {
      setFinish(true);
      console.log("finish");
    } else if (time === 0) {
      console.log(finish);
    }
  }, [time]);

  function start() {
    setTime(time => time + 1);
    setTimer(setTimeout(start, 1000));
  }

  function stop() {
    clearTimeout(timer);
    setTime(0);
  }

  return [start, stop, finish];
};

export default usePress;
