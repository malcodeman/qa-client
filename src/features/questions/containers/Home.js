import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Questions from "./Questions";
import Header from "../../header/containers";
import QuestionNewForm from "./QuestionNewForm";
import QuestionDetails from "./QuestionDetails";
import Users from "../../users/containers/Users";
import User from "../../users/containers/User";

const Main = styled.main`
  margin-top: 64px;
`;

const Container = styled.div`
  padding: 24px;
  max-width: 992px;
  margin: 0 auto;
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Container>
            <Route exact path="/" component={Questions} />
            <Route path="/new-question" component={QuestionNewForm} />
            <Route path="/questions/:id" component={QuestionDetails} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:username" component={User} />
          </Container>
        </Main>
      </>
    );
  }
}

export default Home;
