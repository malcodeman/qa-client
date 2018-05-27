import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import { Route, Redirect } from "react-router-dom";

import "./index.css";
import store from "./state/store";
import history from "./state/history";
import Questions from "./features/questions/containers/Questions";
import QuestionDetails from "./features/questions/containers/QuestionDetails";
import QuestionNew from "./features/questions/containers/QuestionNew";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <PrivateRoute path="/" exact component={Questions} />
        <PrivateRoute path="/questions/:id" exact component={QuestionDetails} />
        <PrivateRoute path="/new-question" exact component={QuestionNew} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);
