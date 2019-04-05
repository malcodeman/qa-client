import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import About from "../components/About";
import Tabs from "./Tabs";
import Settings from "./Settings";

const Profile = props => {
  const { username } = props.me;

  return (
    <>
      <Tabs username={username} />
      <Route
        exact
        path={`/users/${username}`}
        render={() => <About user={props.me} />}
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

export default connect(mapStateToProps)(Profile);
