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
  border-bottom: 14px solid
    ${props => (props.upvoted ? props.theme.brand : props.theme.secondary)};
`;

const VotesNumber = styled.span`
  padding: 10px 0;
  color: ${props => props.theme.primary};
`;

const Votes = props => {
  const { upvoted, id, createUpvote, destroyUpvote, upvotesCount } = props;

  return (
    <Wrapper>
      {upvoted ? (
        <Upvote upvoted={"true"} onClick={() => destroyUpvote(id)} />
      ) : (
        <Upvote onClick={() => createUpvote(id)} />
      )}
      <VotesNumber>{upvotesCount}</VotesNumber>
    </Wrapper>
  );
};

export default Votes;
