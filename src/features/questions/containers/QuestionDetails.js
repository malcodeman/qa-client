import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";

import Votes from "../../../core/components/Votes";
import Answers from "../../answers/containers/Answers";
import Header from "./Header";
import {
  findQuestionById,
  findQuestionByIdUnload,
  createUpvote
} from "../actions/questions_actions";

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
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
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
              upvotes={this.props.question.upvotesCount}
              questionId={this.props.question.id}
              createUpvote={this.props.createUpvote}
              upvoted={this.props.question.upvoted}
            />
            <Body>{this.props.question.body}</Body>
          </Main>
          <Footer>
            <User>
              <span>asked {distanceInWordsToNow(createdAt)} ago</span>
              <span>by {this.props.question.author}</span>
            </User>
          </Footer>
        </Question>
      );
    } else {
      return <p>Loading ...</p>;
    }
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {this.renderQuestion()}
            <Answers />
          </Container>
        </Content>
      </Wrapper>
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

const mapDispatchToProps = dispatch => {
  return {
    findQuestionById: id => dispatch(findQuestionById(id)),
    findQuestionByIdUnload: () => dispatch(findQuestionByIdUnload()),
    createUpvote: id => dispatch(createUpvote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetails);
