import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const Article = styled.article`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  word-wrap: break-word;
`;

const Time = styled.time`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const Question = props => {
  return (
    <Article>
      <Text>{props.text}</Text>
      <Time>{distanceInWordsToNow(props.createdAt)} ago</Time>
    </Article>
  );
};

export default Question;
