import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import User from "./User";

import { findMe } from "../actions/users_actions";

class Root extends Component {
  renderUser = () => {
    const { username } = this.props.match.params;
    const { me } = this.props;
    if (me !== null) {
      if (username === me.username) {
        return <Profile />;
      } else {
        return <User username={username} />;
      }
    } else {
      return null;
    }
  };
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me === null) {
      findMe();
    }
  };
  render() {
    return this.renderUser();
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  { findMe }
)(Root);
