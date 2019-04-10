import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

const ProfilePhoto = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius};
`;

const NameFirstLetter = styled.div`
  height: 48px;
  width: 48px;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

const Details = styled.div`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: 0.8rem;
  line-height: 1.2;
  color: ${props => props.theme.brand};
`;

const Username = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

const User = props => {
  return (
    <Wrapper>
      {props.profilePhotoURL ? (
        <ProfilePhoto src={props.profilePhotoURL} />
      ) : (
        <NameFirstLetter>{props.nameFirstLetter}</NameFirstLetter>
      )}
      <Details>
        <Link to={`/users/${props.username}`}>
          <Name>{props.name}</Name>
        </Link>
        <Username>{props.username}</Username>
      </Details>
    </Wrapper>
  );
};

export default User;
