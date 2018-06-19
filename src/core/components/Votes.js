import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Upvote = styled.div`
  width: 0;
  height: 0;
  cursor: pointer;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 14px solid ${props => props.color};
`;

const VotesNumber = styled.span`
  padding: 10px 0;
`;

const Votes = props => {
  const {
    questionId,
    answerId,
    upvotesCount,
    createUpvote,
    upvoted,
    destroyUpvote,
    owner
  } = props;
  const renderUpvote = () => {
    if (owner) {
      return <Upvote color={"#ccc"} />;
    } else {
      if (answerId) {
        if (upvoted) {
          return (
            <Upvote
              color={"#f48024"}
              onClick={() => destroyUpvote(upvoted.upvoteId, true)}
            />
          );
        } else {
          return (
            <Upvote
              color={"#858c93"}
              onClick={() => createUpvote(answerId, true)}
            />
          );
        }
      } else {
        if (upvoted) {
          return (
            <Upvote
              color={"#f48024"}
              onClick={() => destroyUpvote(upvoted.upvoteId, false)}
            />
          );
        } else {
          return (
            <Upvote
              color={"#858c93"}
              onClick={() => createUpvote(questionId, false)}
            />
          );
        }
      }
    }
  };
  return (
    <Wrapper>
      {renderUpvote()}
      <VotesNumber>{upvotesCount}</VotesNumber>
    </Wrapper>
  );
};

export default Votes;
