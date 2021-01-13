import React from "react";
import { createUseStyles } from "react-jss";
import GroupButtons from "./Menu/GroupButtons";
import PopupButtons from "./Menu/PopupButtons";

const useStyles = createUseStyles({
  header: {
    width: "100%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px",
    zIndex: 10,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <PopupButtons />
      <GroupButtons />
    </header>
  );
};

export default Header;
