import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import defaultTheme from "./styles/themes/default";
import store from "./state/store";
import history from "./routing/history";
import PrivateRoute from "./routing/PrivateRoute";
import Landing from "../features/landing/containers/Landing";
import Home from "../features/questions/containers/Questions";
import Users from "../features/users/containers/Users";
import QuestionNew from "../features/questions/containers/QuestionNew";
import QuestionDetails from "../features/questions/containers/QuestionDetails";
import User from "../features/users/containers/User";

const Root = () => {
  if (localStorage.getItem("token") === null) {
    return <Landing />;
  }
  return <Home />;
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Router history={history}>
          <Route exact path="/" component={Root} />
          <PrivateRoute path="/new-question" component={QuestionNew} />
          <PrivateRoute path="/questions/:id" component={QuestionDetails} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute path="/users/:username" component={User} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
