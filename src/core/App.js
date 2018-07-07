import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "./routes";

const App = () => {
  return (
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
  );
};

export default App;
