import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import Votes from "../../../core/components/Votes";

const StyledAnswer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 20px 0;
`;

const Main = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  padding: 24px 0;
`;

const Body = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
`;

const Answer = props => {
  return (
    <StyledAnswer>
      <Main>
        <Votes
          answerId={props.id}
          upvotesCount={props.upvotesCount}
          createUpvote={props.createUpvote}
          destroyUpvote={props.destroyUpvote}
          upvoted={props.upvoted}
          owner={props.owner}
        />
        <Body>{props.body}</Body>
      </Main>
      <Footer>
        <Info>
          <span>answered {distanceInWordsToNow(props.createdAt)} ago</span>
          <span>by {props.author}</span>
        </Info>
      </Footer>
    </StyledAnswer>
  );
};

export default Answer;
