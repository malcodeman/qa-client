import React, { Component } from "react";
import { connect } from "react-redux";

import About from "../components/About";
import Posts from "./Posts";
import Profile from "./Profile";
import { findUserByUsername } from "../actions/users_actions";

class User extends Component {
  componentDidMount = () => {
    const { me, findUserByUsername } = this.props;
    const { username } = this.props.match.params;

    if (username !== me.username) {
      findUserByUsername(username);
    }
  };

  render() {
    const { user } = this.props;
    const { username } = this.props.match.params;
    const { me } = this.props;

    if (username === me.username) {
      return <Profile />;
    }
    return (
      <>
        <About user={user} />
        <Posts questions={user.questions} />
      </>
    );
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
