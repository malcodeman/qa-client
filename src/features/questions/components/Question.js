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

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`;

const Number = styled.span`
  font-size: 1rem;
`;

const Description = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: ${props => (props.marginBottom ? "20px" : "0")};
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Excerpt = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const Question = props => {
  return (
    <Wrapper>
      <Stats>
        <Number>{props.num_votes}</Number>
        <Description marginBottom={true}>votes</Description>
        <Number>{props.num_answers}</Number>
        <Description>answers</Description>
      </Stats>
      <Summary>
        <StyledLink to={`/questions/${props.id}`}>{props.title}</StyledLink>
        <Excerpt>{props.body}</Excerpt>
        <Footer>
          <Time>asked {distanceInWordsToNow(props.createdAt)} ago</Time>
        </Footer>
      </Summary>
    </Wrapper>
  );
};

export default Question;
