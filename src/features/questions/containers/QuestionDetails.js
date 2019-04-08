import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Post from "../components/Post";
import YourAnswer from "../components/YourAnswer";
import {
  findQuestionById,
  createAnswer,
  upvoteQuestion,
  downvoteQuestion,
  upvoteAnswer,
  downvoteAnswer
} from "../actions/questionsActionCreators";
import {
  createQuestionComment,
  createAnswerComment
} from "../../comments/actions/commentsActionCreators";

const Question = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.header`
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`;

class QuestionDetails extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    const { findQuestionById } = this.props;

    findQuestionById(id);
  };

  render() {
    const { id: questionId } = this.props.match.params;
    const {
      location,
      question,
      upvoteQuestion,
      downvoteQuestion,
      upvoteAnswer,
      downvoteAnswer,
      createQuestionComment,
      createAnswerComment,
      createAnswer
    } = this.props;

    return (
      <>
        <Question>
          <Title>
            <Link to={location.pathname}>{question.title}</Link>
          </Title>
          <Post
            post={question}
            createUpvote={upvoteQuestion}
            destroyUpvote={downvoteQuestion}
            createComment={createQuestionComment}
            id={questionId}
          />
        </Question>
        <Subtitle>{question.answers.length} Answers</Subtitle>
        {question.answers.map(answer => {
          return (
            <Post
              key={answer.id}
              post={answer}
              createUpvote={upvoteAnswer}
              destroyUpvote={downvoteAnswer}
              createComment={createAnswerComment}
              id={answer.id}
            />
          );
        })}
        <YourAnswer questionId={questionId} createAnswer={createAnswer} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question
  };
};

export default connect(
  mapStateToProps,
  {
    findQuestionById,
    createQuestionComment,
    createAnswerComment,
    createAnswer,
    upvoteQuestion,
    downvoteQuestion,
    upvoteAnswer,
    downvoteAnswer
  }
)(QuestionDetails);
