import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { upvoteQuestion, downvoteQuestion } from "../actions/questions_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Vote extends Component {
  renderVote = () => {
    if (this.props.question) {
      const { id } = this.props.question;
      return (
        <React.Fragment>
          <span onClick={() => this.props.upvoteQuestion(id)}>UP</span>
          <span>{this.props.num_answers}</span>
          <span onClick={() => this.props.downvoteQuestion(id)}>DOWN</span>
        </React.Fragment>
      );
    }
  };
  render() {
    return <Wrapper>{this.renderVote()}</Wrapper>;
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question,
    num_answers: state.answers.num_answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuestion: id => dispatch(upvoteQuestion(id)),
    downvoteQuestion: id => dispatch(downvoteQuestion(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
