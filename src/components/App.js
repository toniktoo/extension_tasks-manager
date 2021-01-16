import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import Header from "./header";
import Main from "./main";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { fetchListTitle } from "../redux/thunks/listTitle";
import { fetchListTask } from "../redux/thunks/listTask";
import { useDispatch } from "react-redux";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const useStyles = createUseStyles({
  container: {
    width: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: "5px",
    backgroundColor: theme.palette.background.paper,
  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListTitle());
    dispatch(fetchListTask());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.container}>
        <Header />
        <Main />
      </section>
    </ThemeProvider>
  );
};

export default App;
