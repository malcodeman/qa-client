import React from "react";
import styled, { css } from "styled-components";

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

const Votes = props => {
  const { questionId, votes, createDownvote, createUpvote } = props;
  return (
    <Wrapper>
      <Triangle
        direction={"up"}
        size={"14px"}
        color={"#858c93"}
        onClick={() => createUpvote(questionId)}
      />
      <VotesNumber>{votes}</VotesNumber>
      <Triangle
        direction={"down"}
        size={"14px"}
        color={"#858c93"}
        onClick={() => createDownvote(questionId)}
      />
    </Wrapper>
  );
};

export default Votes;