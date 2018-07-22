import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import { ThemeProvider } from "styled-components";

import "./index.css";
import store from "./core/state/store";
import history from "./core/state/history";
import App from "./core/App";
import defaultTheme from "./core/themes/default";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
