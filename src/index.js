import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<AppWithStore />, document.getElementById("root"));
