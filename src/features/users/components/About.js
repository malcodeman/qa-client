import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
`;

const NameFirstLetter = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #007aff;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePhoto = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const Span = styled.span`
  font-size: 0.8rem;
`;

const About = props => {
  const {
    profilePhotoURL,
    nameFirstLetter,
    name,
    username,
    createdAt,
    questionsLength,
    answersLength
  } = props;
  return (
    <Grid>
      {profilePhotoURL ? (
        <ProfilePhoto src={profilePhotoURL} />
      ) : (
        <NameFirstLetter>{nameFirstLetter}</NameFirstLetter>
      )}
      <Col>
        <Span>{name}</Span>
        <Span>{username}</Span>
      </Col>
      <Col>
        <Span>Member for {distanceInWordsToNow(createdAt)}</Span>
        <Span>Questions {questionsLength}</Span>
        <Span>Answers {answersLength}</Span>
      </Col>
    </Grid>
  );
};

export default About;
