import React from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

import CommentForm from "../../comments/containers/CommentForm";
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
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
`;

const ProfilePhoto = styled.img`
  height: 32px;
  width: 32px;
  object-fit: cover;
  margin-right: 5px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
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
        <User>
          {post.user.profilePhotoURL ? (
            <ProfilePhoto src={post.user.profilePhotoURL} />
          ) : null}
          <Col>
            <span>
              asked {post.createdAt && distanceInWordsToNow(post.createdAt)} ago
            </span>
            <span>by {post.user.username}</span>
          </Col>
        </User>
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
