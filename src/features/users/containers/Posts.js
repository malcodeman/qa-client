import React, { Component } from "react";
import styled from "styled-components";

import { format } from "date-fns";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
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

class Posts extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Wrapper>
        Questions
        {questions.map(question => (
          <Post key={question.id}>
            <Info>
              <Upvotes>{question.upvotes.length}</Upvotes>
              <StyledLink to={`/questions/${question.id}`}>
                {question.title}
              </StyledLink>
            </Info>
            <Date>{format(question.createdAt, "MMM DD 'YY")}</Date>
          </Post>
        ))}
      </Wrapper>
    );
  }
}

export default Posts;
