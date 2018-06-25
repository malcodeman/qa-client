import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  padding: 10px;
  display: flex;
`;

const ProfilePhoto = styled.img`
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 3px;
`;

const NameFirstLetter = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 3px;
  background-color: #007aff;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const Details = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 0.8rem;
  line-height: 1.2;
  color: ${props => props.color || "rgba(0, 0, 0, 0.8)"};
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
          <Text color="#ed1965">{props.name}</Text>
        </Link>
        <Text>{props.username}</Text>
      </Details>
    </Wrapper>
  );
};

export default User;
