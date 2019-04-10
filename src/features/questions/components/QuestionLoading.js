import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 24px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

const Title = styled.div`
  height: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-bottom: 10px;
`;

const Details = styled.div`
  height: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 25%;
`;

const QuestionLoading = () => {
  return (
    <Wrapper>
      <Title />
      <Details />
    </Wrapper>
  );
};

export default QuestionLoading;
