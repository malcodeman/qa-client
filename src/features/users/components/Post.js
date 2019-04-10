import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const StyledPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 0.8rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.link};
`;

const Upvotes = styled.div`
  padding: 3px 6px;
  margin-right: 10px;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`;

const Date = styled.span`
  color: ${props => props.theme.secondary};
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
