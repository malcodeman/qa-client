import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import QuestionLoading from "../components/QuestionLoading";
import Question from "../components/Question";
import Header from "./Header";
import { getQuestions } from "../actions/questions_actions";

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

class Questions extends Component {
  componentDidMount = () => {
    this.props.getQuestions();
  };
  renderLoading = () => {
    return this.props.loading ? <QuestionLoading /> : null;
  };
  renderQuestions = () => {
    if (this.props.questions.length === 0 && this.props.loading === false) {
      return <p>No questions</p>;
    } else {
      return this.props.questions.map(question => {
        return (
          <Question
            key={question.id}
            id={question.id}
            title={question.title}
            body={question.body}
            votes={question.num_votes}
            answers={question.num_answers}
            createdAt={question.createdAt}
          />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {this.renderLoading()}
            {this.renderQuestions()}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    loading: state.questions.loading
  };
};

export default connect(mapStateToProps, { getQuestions })(Questions);
