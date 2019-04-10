import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 48px;
  padding: 10px;
  display: flex;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

const ProfilePhoto = styled.div`
  height: 48px;
  min-width: 48px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 4px;
  border-radius: ${props => props.theme.borderRadius};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  height: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-bottom: 10px;
`;

const Username = styled.div`
  height: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  width: 25%;
`;

const UserLoading = () => {
  return (
    <Wrapper>
      <ProfilePhoto />
      <Details>
        <Name />
        <Username />
      </Details>
    </Wrapper>
  );
};

export default UserLoading;
