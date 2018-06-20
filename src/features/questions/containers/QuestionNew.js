import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import QuestionNewForm from "./QuestionNewForm";
import Toolbar from "./Toolbar";
import { createQuestion } from "../actions/questions_actions";

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
  render() {
    return (
      <Wrapper>
        <Toolbar />
        <Content>
          <Container>
            <QuestionNewForm createQuestion={this.props.createQuestion} />
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { createQuestion }
)(QuestionNew);
