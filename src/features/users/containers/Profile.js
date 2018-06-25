import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { distanceInWordsToNow } from "date-fns";

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

const NameFirstLetter = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #007aff;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 0.8rem;
`;

const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePhoto = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  object-fit: cover;
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
            <About>
              {profilePhotoURL ? (
                <ProfilePhoto src={profilePhotoURL} />
              ) : (
                <NameFirstLetter>{nameFirstLetter}</NameFirstLetter>
              )}
              <Col>
                <Span>{name}</Span>
                <Span>{username}</Span>
              </Col>
              <Col>
                <Span>Member for {distanceInWordsToNow(createdAt)}</Span>
                <Span>Questions {questions.length}</Span>
                <Span>Answers {answers.length}</Span>
              </Col>
            </About>
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
