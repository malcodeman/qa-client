import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import {
  createUpvoteAnswer,
  createDownvoteAnswer
} from "../../questions/actions/questions_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  cursor: pointer;
  ${props => {
    if (props.direction === "up") {
      return css`
        border-left: ${props.size} solid transparent;
        border-right: ${props.size} solid transparent;
        border-bottom: ${props.size} solid ${props.color};
      `;
    } else if (props.direction === "right") {
      return css`
        border-top: ${props.size} solid transparent;
        border-bottom: ${props.size} solid transparent;
        border-left: ${props.size} solid ${props.color};
      `;
    } else if (props.direction === "down") {
      return css`
        border-left: ${props.size} solid transparent;
        border-right: ${props.size} solid transparent;
        border-top: ${props.size} solid ${props.color};
      `;
    } else if (props.direction === "left") {
      return css`
        border-top: ${props.size} solid transparent;
        border-bottom: ${props.size} solid transparent;
        border-right: ${props.size} solid ${props.color};
      `;
    }
  }};
`;

const VotesNumber = styled.span`
  padding: 10px 0;
`;

class Votes extends Component {
  renderVote = () => {
    if (this.props.question) {
      const { answerId } = this.props;
      const { id } = this.props.question;
      return (
        <React.Fragment>
          <Triangle
            direction={"up"}
            size={"14px"}
            color={"#858c93"}
            onClick={() => this.props.createUpvoteAnswer(id, answerId)}
          />
          <VotesNumber>{this.props.votes}</VotesNumber>
          <Triangle
            direction={"down"}
            size={"14px"}
            color={"#858c93"}
            onClick={() => this.props.createDownvoteAnswer(id, answerId)}
          />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUpvoteAnswer: (questionId, answerId) =>
      dispatch(createUpvoteAnswer(questionId, answerId)),
    createDownvoteAnswer: (questionId, answerId) =>
      dispatch(createDownvoteAnswer(questionId, answerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
