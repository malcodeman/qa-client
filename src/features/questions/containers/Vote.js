import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { createUpvote, createDownvote } from "../actions/questions_actions";

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
          <span onClick={() => this.props.createUpvote(id)}>UP</span>
          <span>{this.props.num_answers}</span>
          <span onClick={() => this.props.createDownvote(id)}>DOWN</span>
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
    createUpvote: id => dispatch(createUpvote(id)),
    createDownvote: id => dispatch(createDownvote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
