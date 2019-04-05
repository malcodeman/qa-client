import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import Post from "./Post";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 40px 0;
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

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoQuestions = styled.p`
  font-size: 0.8rem;
`;

const About = props => {
  const { user } = props;

  return (
    <>
      <Grid>
        {user.profilePhotoURL ? (
          <ProfilePhoto src={user.profilePhotoURL} />
        ) : (
          <NameFirstLetter>{user.nameFirstLetter}</NameFirstLetter>
        )}
        <Col>
          <Span>{user.name}</Span>
          <Span>{user.username}</Span>
        </Col>
        <Col>
          <Span>
            Member for {user.createdAt && distanceInWordsToNow(user.createdAt)}
          </Span>
          <Span>Questions {user.questions.length}</Span>
          <Span>Answers {user.answers.length}</Span>
        </Col>
      </Grid>
      <Posts>
        {user.username !== "" && user.questions.length === 0 ? (
          <NoQuestions>{user.username} has not asked any questions</NoQuestions>
        ) : null}
        {user.questions.map(question => {
          return (
            <Post
              key={question.id}
              upvotes={question.upvotes.length}
              id={question.id}
              title={question.title}
              createdAt={question.createdAt}
            />
          );
        })}
      </Posts>
    </>
  );
};

export default About;
