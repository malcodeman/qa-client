import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import About from "../components/About";
import Posts from "./Posts";
import Header from "../../header/containers";

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

class Users extends Component {
  render() {
    const {
      name,
      username,
      profilePhotoURL,
      nameFirstLetter,
      createdAt,
      questions,
      answers
    } = this.props.me;
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
    me: state.users.me
  };
};

export default connect(mapStateToProps)(Users);
