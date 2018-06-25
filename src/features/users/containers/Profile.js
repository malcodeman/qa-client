import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router-dom";

import About from "../components/About";
import Posts from "./Posts";
import Tabs from "./Tabs";
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
            <Tabs username={username} />
            <Route
              exact
              path={`/users/${username}`}
              render={() => (
                <React.Fragment>
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
                </React.Fragment>
              )}
            />
            <Route
              path={`/users/${username}/settings`}
              render={() => (
                <React.Fragment>
                  <div>Edit</div>
                </React.Fragment>
              )}
            />
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

export default withRouter(connect(mapStateToProps)(Users));
