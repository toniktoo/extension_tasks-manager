import React from "react";
import { createUseStyles } from "react-jss";
import ItemsList from "./ItemsList";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "8px",
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <ItemsList />
    </main>
  );
};

export default Main;
