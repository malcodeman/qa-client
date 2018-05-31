import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import { createUpvote, createDownvote } from "../actions/questions_actions";

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
      const { id } = this.props.question;
      const votes = this.props.upvotes - this.props.downvotes;
      return (
        <React.Fragment>
          <Triangle
            direction={"up"}
            size={"14px"}
            color={"#858c93"}
            onClick={() => this.props.createUpvote(id)}
          />
          <VotesNumber>{votes}</VotesNumber>
          <Triangle
            direction={"down"}
            size={"14px"}
            color={"#858c93"}
            onClick={() => this.props.createDownvote(id)}
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
    upvotes: state.questions.upvotes,
    downvotes: state.questions.downvotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUpvote: id => dispatch(createUpvote(id)),
    createDownvote: id => dispatch(createDownvote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
