import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";

const LinkWrapper = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
`;

const common = `
  font-size: 0.8rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Votes = styled.span`
  ${common} margin-right: 0.4rem;
`;

const Author = styled.span`
  ${common} margin-right: 0.4rem;
`;

const Time = styled.time`
  ${common} margin-right: 0.4rem;
`;

const Answers = styled.span`
  ${common};
`;

const Question = props => {
  return (
    <LinkWrapper to={`/questions/${props.id}`}>
      <Title>{props.title}</Title>
      <Votes>{props.votes} votes</Votes>
      <Author>by {props.author}</Author>
      <Time>{distanceInWordsToNow(props.createdAt)} ago</Time>
      <Answers>{props.answers} answers</Answers>
    </LinkWrapper>
  );
};

export default Question;
