import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "./Header";
import {
  createQuestion,
  createQuestionClear
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

class QuestionDetails extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            <p>Details</p>
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    create_question_success: state.questions.create_question_success,
    create_question_trigger: state.questions.create_question_trigger
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: newQuestion => dispatch(createQuestion(newQuestion)),
    createQuestionClear: () => dispatch(createQuestionClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
