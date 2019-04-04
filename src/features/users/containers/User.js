import React, { Component } from "react";
import { connect } from "react-redux";

import About from "../components/About";
import Posts from "./Posts";
import { findMe, findUserByUsername } from "../actions/users_actions";

class User extends Component {
  componentDidMount = () => {
    const { username, findUserByUsername } = this.props;
    findUserByUsername(username);
  };
  render() {
    const {
      profilePhotoURL,
      nameFirstLetter,
      name,
      username,
      createdAt,
      questions,
      answers
    } = this.props.user;
    return (
      <>
        <About
          profilePhotoURL={profilePhotoURL}
          nameFirstLetter={nameFirstLetter}
          name={name}
          username={username}
          createdAt={createdAt}
          questionsLength={questions.length}
          answersLength={answers.length}
        />
        <Posts questions={questions} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  { findMe, findUserByUsername }
)(User);
