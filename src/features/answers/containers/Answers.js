import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Answer from "../components/Answer";
import YourAnswer from "./YourAnswer";
import { createAnswer } from "../actions/answers_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div``;

class Answers extends Component {
  renderAnswers = () => {
    if (this.props.answers.length === 0) {
      return <p>No answers</p>;
    } else {
      return this.props.answers.map(answer => {
        return (
          <Answer
            key={answer.id}
            id={answer.id}
            body={answer.body}
            author={answer.user.username}
            createdAt={answer.createdAt}
          />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Content>
          <Container>
            {this.renderAnswers()}
            {this.props.question ? (
              <YourAnswer
                questionId={this.props.question.id}
                createAnswer={this.props.createAnswer}
              />
            ) : null}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
    question: state.questions.question
  };
};

export default connect(mapStateToProps, { createAnswer })(Answers);
