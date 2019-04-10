import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const StyledComment = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Body = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

const Comment = props => {
  return (
    <StyledComment>
      <Body>
        {props.body} -- {props.author} {distanceInWordsToNow(props.createdAt)}{" "}
        ago
      </Body>
    </StyledComment>
  );
};

export default Comment;
