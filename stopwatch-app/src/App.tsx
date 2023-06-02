import React, { useRef, useState } from "react";

const App: React.FC = () => {
  const [timerStatus, setTimerStatus] = useState("stop");
  const [timer, setTimer] = useState(0);
  let intervalId = useRef<NodeJS.Timer>();

  function start() {
    setTimerStatus("start");
    setTimer(0);
    runStopwatch();
  }

  function stop() {
    setTimerStatus("stop");

    clearInterval(intervalId.current);
  }

  function restart() {
    setTimerStatus("restart");
    runStopwatch();
  }

  function runStopwatch() {
    intervalId.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  return (
    <>
      {timerStatus === "stop" ? <button onClick={() => start()}>start</button> : <></>}
      {timerStatus === "start" || timerStatus === "restart" ? <button onClick={() => stop()}>stop</button> : <></>}
      {timerStatus === "stop" && timer !== 0 ? <button onClick={() => restart()}>restart</button> : <></>}
      <p>
        {Math.floor(timer / 3600)}:{Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
      </p>
    </>
  );
};

export default App;
