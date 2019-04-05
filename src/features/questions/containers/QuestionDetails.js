import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";

import CommentForm from "../../comments/containers/CommentForm";
import Comment from "../../comments/components/Comment";
import Votes from "../../../core/components/Votes";
import Answers from "../../answers/containers/Answers";
import {
  findQuestionById,
  createUpvote,
  destroyUpvote
} from "../actions/questionsActionCreators";
import { createQuestionComment } from "../../comments/actions/commentsActionCreators";

const Question = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.header`
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const Main = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  padding: 24px 0;
`;

const Body = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
`;

const ProfilePhoto = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  margin-right: 5px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
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
      createUpvote,
      destroyUpvote,
      createQuestionComment
    } = this.props;

    return (
      <>
        <Question>
          <Title>
            <Link to={location.pathname}>{question.title}</Link>
          </Title>
          <Main>
            <Votes
              upvotesCount={question.upvotesCount}
              questionId={question.id}
              createUpvote={createUpvote}
              destroyUpvote={destroyUpvote}
              upvoted={question.upvoted}
              owner={question.owner}
            />
            <Body>{question.body}</Body>
          </Main>
          <Footer>
            <User>
              {question.user.profilePhotoURL ? (
                <ProfilePhoto src={question.user.profilePhotoURL} />
              ) : null}
              <Col>
                <span>
                  asked{" "}
                  {question.createdAt &&
                    distanceInWordsToNow(question.createdAt)}{" "}
                  ago
                </span>
                <span>by {question.user.username}</span>
              </Col>
            </User>
          </Footer>
          {question.comments.map(comment => (
            <Comment
              key={comment.id}
              body={comment.body}
              createdAt={comment.createdAt}
              author={comment.user.username}
            />
          ))}
          <CommentForm createComment={createQuestionComment} id={questionId} />
        </Question>
        <Answers />
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
    createUpvote,
    destroyUpvote,
    createQuestionComment
  }
)(QuestionDetails);
