import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import About from "../components/About";
import Posts from "./Posts";
import Header from "../../header/containers";
import { findMe, findUserByUsername } from "../actions/users_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

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
      <Wrapper>
        <Header />
        <Content>
          <Container>
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
          </Container>
        </Content>
      </Wrapper>
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
