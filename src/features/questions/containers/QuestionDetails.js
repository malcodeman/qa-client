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
  findQuestionByIdUnload,
  createUpvote,
  destroyUpvote
} from "../actions/questions_actions";
import { createComment } from "../../comments/actions";

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
    this.props.findQuestionById(id);
  };
  componentWillUnmount = () => {
    this.props.findQuestionByIdUnload();
  };

  renderQuestion = () => {
    if (this.props.question) {
      const { createdAt } = this.props.question;
      return (
        <Question>
          <Title>
            <Link to={this.props.location.pathname}>
              {this.props.question.title}
            </Link>
          </Title>
          <Main>
            <Votes
              upvotesCount={this.props.question.upvotesCount}
              questionId={this.props.question.id}
              createUpvote={this.props.createUpvote}
              destroyUpvote={this.props.destroyUpvote}
              upvoted={this.props.question.upvoted}
              owner={this.props.question.owner}
            />
            <Body>{this.props.question.body}</Body>
          </Main>
          <Footer>
            <User>
              {this.props.question.user.profilePhotoURL ? (
                <ProfilePhoto src={this.props.question.user.profilePhotoURL} />
              ) : null}
              <Col>
                <span>asked {distanceInWordsToNow(createdAt)} ago</span>
                <span>by {this.props.question.user.username}</span>
              </Col>
            </User>
          </Footer>
          {this.props.question.comments.map(comment => (
            <Comment
              key={comment.id}
              body={comment.body}
              createdAt={comment.createdAt}
              author={comment.user.username}
            />
          ))}
          <CommentForm
            createComment={this.props.createComment}
            questionId={this.props.question.id}
          />
        </Question>
      );
    } else {
      return <p>Loading ...</p>;
    }
  };
  render() {
    return (
      <>
        {this.renderQuestion()}
        <Answers />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question,
    num_answers: state.answers.num_answers,
    loading: state.questions.loading
  };
};

export default connect(
  mapStateToProps,
  {
    findQuestionById,
    findQuestionByIdUnload,
    createUpvote,
    destroyUpvote,
    createComment
  }
)(QuestionDetails);
