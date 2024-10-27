import { useEffect } from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [timer, setTimer] = useState(0);

  function startTimer() {
    setIsTimerOn((prev) => !prev);
  }

  function stopTimer() {
    setIsTimerOn((prev) => !prev);
  }

  const sec = Math.floor(timer / 1000);
  const min = Math.floor(sec / (1000 * 60));
  const hour = Math.floor(sec / (1000 * 60 * 60));

  useEffect(() => {
    let clock;
    if (isTimerOn) {
      clock = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1);
    }

    return () => clearInterval(clock);
  }, [timer, setTimer, isTimerOn]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>
        {hour} : {min.toString().padStart(2, "0")} :{" "}
        {sec.toString().padStart(2, "0")} : {timer % 100}
      </h2>

      <button disabled={isTimerOn} onClick={startTimer}>
        Start
      </button>
      <button disabled={!isTimerOn} onClick={stopTimer}>
        Stop
      </button>
      <button disabled={isTimerOn} onClick={() => setTimer(0)}>
        Reset
      </button>
    </div>
  );
}
