import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Questions from "./Questions";
import Header from "../../header/components/Header";
import QuestionNewForm from "../components/QuestionNewForm";
import QuestionDetails from "./QuestionDetails";
import Users from "../../users/containers/Users";
import User from "../../users/containers/User";
import { findMe } from "../../users/actions/usersActionCreators";

const Main = styled.main`
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  background-color: ${props => props.theme.backgroundPrimary};
`;

const Container = styled.div`
  padding: 24px;
  max-width: 992px;
  margin: 0 auto;
`;

class Home extends React.Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;

    if (me.email === "") {
      findMe();
    }
  };

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

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  { findMe }
)(Home);
