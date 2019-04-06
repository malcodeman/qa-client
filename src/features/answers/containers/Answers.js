import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Answer from "../components/Answer";
import YourAnswer from "./YourAnswer";
import { createAnswer } from "../actions/answersActionCreators";
import {
  createUpvote,
  destroyUpvote
} from "../../questions/actions/questionsActionCreators";
import { createAnswerComment } from "../../comments/actions/commentsActionCreators";

const Header = styled.header`
  font-size: 1rem;
`;

const Answers = props => {
  const { id: questionId } = props.match.params;
  const { num_answers, question, createAnswerComment, createAnswer } = props;

  return (
    <>
      <Header>{num_answers} Answers</Header>
      {question.answers.map(answer => {
        return (
          <Answer
            key={answer.id}
            id={answer.id}
            body={answer.body}
            author={answer.user.username}
            profilePhotoURL={answer.user.profilePhotoURL}
            createdAt={answer.createdAt}
            upvotesCount={answer.upvotesCount}
            upvoted={answer.upvoted}
            owner={answer.owner}
            comments={answer.comments}
            createUpvote={createUpvote}
            destroyUpvote={destroyUpvote}
            createComment={createAnswerComment}
          />
        );
      })}
      {question ? (
        <YourAnswer questionId={questionId} createAnswer={createAnswer} />
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    answers: state.answers.answers,
    num_answers: state.answers.num_answers,
    question: state.questions.question
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createAnswer, createUpvote, destroyUpvote, createAnswerComment }
  )(Answers)
);
