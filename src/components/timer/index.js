import React, { useState } from "react";
import Timer from "react-compound-timer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "#fff",
    marginRight: "3px",
    display: "flex",
    flexDirection: "row",
    "&.active": {
      color: "#f50057",
    },
  },
  timerText: {
    marginRight: "3px",
    display: "flex",
    flexDirection: "row",
  },
}));

const CustomTimer = ({ timer }) => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles();

  return timer ? (
    <Timer
      initialTime={timer.from * 1000}
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
            <>
              <div
                className={`${classes.container}${isActive ? " active" : ""}`}
              >
                <div
                  onClick={isActive ? pause : start}
                  className={classes.timerText}
                >
                  <Timer.Minutes />m <Timer.Seconds />s{" "}
                </div>
                <span> : {Math.ceil(timer.to / 60)}m</span>
              </div>
              {/* <div>{timerState}</div>
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div> */}
            </>
          </React.Fragment>
        );
      }}
    </Timer>
  ) : null;
};

export default CustomTimer;
