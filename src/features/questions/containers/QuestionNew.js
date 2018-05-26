import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import QuestionNewForm from "./QuestionNewForm";
import Toolbar from "./Toolbar";
import { createQuestion, createQuestionClear } from "../actions/questions_actions";

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

class QuestionNew extends Component {
  componentWillUnmount = () => {
    this.props.createQuestionClear();
  };
  render() {
    if (this.props.create_question_success) {
      return <Redirect to="/" />;
    }
    return (
      <Wrapper>
        <Toolbar />
        <Content>
          <Container>
            <QuestionNewForm
              createQuestion={this.props.createQuestion}
              createQuestionClear={this.props.createQuestionClear}
              create_question_trigger={this.props.create_question_trigger}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);
