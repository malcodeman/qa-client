import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";

import CommentForm from "../../comments/components/CommentForm";
import Comment from "../../comments/components/Comment";
import Votes from "./Votes";

const Main = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  padding: 24px 0;
`;

const Body = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  color: ${props => props.theme.primary};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column
  padding: 10px;
  font-size: 0.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.primary};
`;

const UserTime = styled.div`
  margin-bottom: 4px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePhoto = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 4px;
`;

const NameFirstLetter = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-right: 4px;
  background-color: ${props => props.theme.brand};
`;

const Username = styled(Link)`
  color: ${props => props.theme.link};
`;

const Post = props => {
  const { post, createUpvote, destroyUpvote, createComment, id } = props;

  return (
    <>
      <Main>
        <Votes
          upvotesCount={post.upvotesCount}
          id={id}
          createUpvote={createUpvote}
          destroyUpvote={destroyUpvote}
          upvoted={post.upvoted}
          owner={post.owner}
        />
        <Body>{post.body}</Body>
      </Main>
      <Footer>
        <UserInfo>
          {post.title === "" ? null : (
            <UserTime>
              {post.title ? "asked" : "answered"}{" "}
              {post.createdAt && distanceInWordsToNow(post.createdAt)} ago
            </UserTime>
          )}
          <UserDetails>
            {post.user.profilePhotoURL ? (
              <ProfilePhoto src={post.user.profilePhotoURL} />
            ) : (
              <NameFirstLetter>{post.user.nameFirstLetter}</NameFirstLetter>
            )}
            <Username to={`/users/${post.user.username}`}>
              {post.user.username}
            </Username>
          </UserDetails>
        </UserInfo>
      </Footer>
      {post.comments.map(comment => (
        <Comment
          key={comment.id}
          body={comment.body}
          createdAt={comment.createdAt}
          author={comment.user.username}
        />
      ))}
      <CommentForm createComment={createComment} id={id} />
    </>
  );
};
export default Post;
