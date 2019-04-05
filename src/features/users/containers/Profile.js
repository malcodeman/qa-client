import React from "react";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";

import About from "../components/About";
import Posts from "./Posts";
import Tabs from "./Tabs";
import Settings from "./Settings";

const Profile = props => {
  const { username, questions } = props.me;

  return (
    <>
      <Tabs username={username} />
      <Route
        exact
        path={`/users/${username}`}
        render={() => (
          <>
            <About user={props.me} />
            <Posts questions={questions} />
          </>
        )}
      />
      <Route path={`/users/${username}/settings`} component={Settings} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default withRouter(connect(mapStateToProps)(Profile));
