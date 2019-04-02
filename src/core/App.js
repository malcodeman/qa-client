import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import defaultTheme from "./styles/themes/default";
import routes from "./routes";
import store from "./state/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Switch>
            {routes.map(route => {
              if (route.private && localStorage.getItem("token") === null) {
                return <Redirect key={route.path} to="/" />;
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
