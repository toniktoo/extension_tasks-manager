import React from "react";
import { createUseStyles } from "react-jss";
import Header from "./header";
import Main from "./main";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "../redux/store";

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

  // React.useEffect(async () => {
  //   const listsTask = await fetchApi.fetchListsTask();
  //   console.log(listsTask);
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={configureStore()}>
        <section className={classes.container}>
          <Header />
          <Main />
        </section>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
