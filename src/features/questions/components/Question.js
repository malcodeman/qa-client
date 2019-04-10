import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { distanceInWordsToNow } from "date-fns";

const LinkWrapper = styled(Link)`
  display: block;
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Title = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.primary};
`;

const common = `
  font-size: 0.8rem;
  line-height: 1.4;
  display: block;
  @media (min-width: 576px) {
    display: inline;
  }
`;

const Upvotes = styled.span`
  ${common} margin-right: 4px;
  color: ${props => props.theme.secondary};
`;

const Author = styled.span`
  ${common} margin-right: 4px;
  color: ${props => props.theme.secondary};
`;

const Time = styled.time`
  ${common} margin-right: 4px;
  color: ${props => props.theme.secondary};
`;

const Answers = styled.span`
  ${common};
  color: ${props => props.theme.secondary};
`;

const Question = props => {
  return (
    <LinkWrapper to={`/questions/${props.id}`}>
      <Title>{props.title}</Title>
      <Upvotes>{props.upvotes} upvotes</Upvotes>
      <Author>by {props.author}</Author>
      <Time>{distanceInWordsToNow(props.createdAt)} ago</Time>
      <Answers>{props.answers} answers</Answers>
    </LinkWrapper>
  );
};

export default Question;
