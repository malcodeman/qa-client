import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: #007aff;
  word-wrap: break-word;
`;

const Time = styled.time`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const Question = props => {
  return (
    <Wrapper>
      <StyledLink to={`/questions/${props.id}`}>{props.title}</StyledLink>
      <Time>asked {distanceInWordsToNow(props.createdAt)} ago</Time>
    </Wrapper>
  );
};

export default Question;
