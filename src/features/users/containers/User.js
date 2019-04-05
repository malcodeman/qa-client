import React, { Component } from "react";
import { connect } from "react-redux";

import About from "../components/About";
import Profile from "./Profile";
import { findUserByUsername } from "../actions/users_actions";

class User extends Component {
  componentDidMount = () => {
    const { username } = this.props.match.params;
    const { me, findUserByUsername } = this.props;

    if (username !== me.username) {
      findUserByUsername(username);
    }
  };

  render() {
    const { username } = this.props.match.params;
    const { me } = this.props;
    const { user } = this.props;

    if (username === me.username) {
      return <Profile />;
    }
    return <About user={user} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  { findUserByUsername }
)(User);
