import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import { createUpvote, createDownvote } from "../actions/questions_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
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

class Votes extends Component {
  renderVote = () => {
    if (this.props.question) {
      const { id } = this.props.question;
      return (
        <React.Fragment>
          <Triangle
            direction={"up"}
            size={"14px"}
            color={"#858c93"}
            onClick={() => this.props.createUpvote(id)}
          />
          <span>{this.props.num_answers}</span>
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
    num_answers: state.answers.num_answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUpvote: id => dispatch(createUpvote(id)),
    createDownvote: id => dispatch(createDownvote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
