import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "./Header";
import { findQuestionById } from "../actions/questions_actions";

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
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.findQuestionById(id);
  };
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
    question: state.questions.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findQuestionById: id => dispatch(findQuestionById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
