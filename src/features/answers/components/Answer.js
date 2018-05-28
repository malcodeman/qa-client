import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Answer = props => {
  return (
    <Wrapper>
      <p>{props.body}</p>
    </Wrapper>
  );
};

export default Answer;
