import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Answer from "../components/Answer";
import YourAnswer from "./YourAnswer";
import { createAnswer } from "../actions/answers_actions";
import {
  createUpvote,
  destroyUpvote
} from "../../questions/actions/questions_actions";

import { createComment } from "../../comments/actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div``;

const Header = styled.header`
  font-size: 1rem;
`;

class Answers extends Component {
  renderAnswersHeader = () => {
    const { num_answers } = this.props;
    if (num_answers !== 0) return <Header>{num_answers} Answers</Header>;
  };
  renderAnswers = () => {
    const { question } = this.props;
    if (question) {
      return question.answers.map(answer => {
        return (
          <Answer
            key={answer.id}
            id={answer.id}
            body={answer.body}
            author={answer.user.username}
            createdAt={answer.createdAt}
            upvotesCount={answer.upvotesCount}
            upvoted={answer.upvoted}
            owner={answer.owner}
            comments={answer.comments}
            createUpvote={this.props.createUpvote}
            destroyUpvote={this.props.destroyUpvote}
            createComment={this.props.createComment}
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
            {this.renderAnswersHeader()}
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
    num_answers: state.answers.num_answers,
    question: state.questions.question
  };
};

export default connect(
  mapStateToProps,
  { createAnswer, createUpvote, destroyUpvote, createComment }
)(Answers);
