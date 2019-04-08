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
  const { upvoted, id, createUpvote, destroyUpvote, upvotesCount } = props;

  return (
    <Wrapper>
      {upvoted ? (
        <Upvote
          color={"#f48024"}
          onClick={() => destroyUpvote(upvoted.upvoteId)}
        />
      ) : (
        <Upvote color={"#ccc"} onClick={() => createUpvote(id)} />
      )}
      <VotesNumber>{upvotesCount}</VotesNumber>
    </Wrapper>
  );
};

export default Votes;
