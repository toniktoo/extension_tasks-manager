import React, { useState } from "react";
import Timer from "react-compound-timer";

const CustomTimer = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Timer
      initialTime={props.from * 1000}
      startImmediately={false}
      onStart={() => setIsActive(true)}
      // onResume={() => console.log("onResume hook")}
      onPause={() => setIsActive(false)}
      // onStop={() => console.log("onStop hook")}
      // onReset={() => console.log("onReset hook")}
    >
      {({ start, resume, pause, stop, reset, timerState }) => {
        return (
          <React.Fragment>
            <div onClick={isActive ? pause : start}>
              <Timer.Minutes />m <Timer.Seconds />s{" "}
            </div>
            {/* <div>{timerState}</div>
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div> */}
          </React.Fragment>
        );
      }}
    </Timer>
  );
};

export default CustomTimer;
