import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Answer from "../components/Answer";
import YourAnswer from "./YourAnswer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div``;

class Answers extends Component {
  renderAnswers = () => {
    if (this.props.answers.length === 0) {
      return <p>No answers</p>;
    } else {
      return this.props.answers.map(answer => {
        return (
          <Answer
            key={answer.id}
            id={answer.id}
            body={answer.body}
            createdAt={answer.createdAt}
          />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Content>
          <Container>
            {this.renderAnswers()}
            <YourAnswer />
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers.answers
  };
};

export default connect(mapStateToProps, null)(Answers);
