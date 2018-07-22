import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import lightTheme from "./style/themes/light";
import darkTheme from "./style/themes/dark";
import routes from "./routes";

class App extends Component {
  getTheme = theme => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };
  render() {
    const { me } = this.props;
    return (
      <ThemeProvider theme={me !== null ? this.getTheme(me.theme) : lightTheme}>
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
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
