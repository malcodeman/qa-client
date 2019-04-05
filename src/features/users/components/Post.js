import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const StyledPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #007aff;
`;

const Upvotes = styled.div`
  color: rgba(0, 0, 0, 0.8);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 3px 6px;
  margin-right: 10px;
`;

const Date = styled.span`
  color: rgba(0, 0, 0, 0.8);
`;

const Post = props => {
  const { upvotes, id, title, createdAt } = props;

  return (
    <StyledPost>
      <Info>
        <Upvotes>{upvotes}</Upvotes>
        <StyledLink to={`/questions/${id}`}>{title}</StyledLink>
      </Info>
      <Date>{format(createdAt, "MMM DD 'YY")}</Date>
    </StyledPost>
  );
};

export default Post;
