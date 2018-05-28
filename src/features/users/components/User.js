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
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const User = props => {
  return (
    <Wrapper>
      <Text>{props.email}</Text>
    </Wrapper>
  );
};

export default User;
