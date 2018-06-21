import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../../header/containers";

import { findMe, findUserByUsername } from "../actions/users_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

class User extends Component {
  componentDidMount = () => {
    const { username, findUserByUsername } = this.props;
    findUserByUsername(username);
  };
  render() {
    const { user } = this.props;
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {user ? (
              <span>
                {user.username}, {user.name}
              </span>
            ) : null}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default connect(
  mapStateToProps,
  { findMe, findUserByUsername }
)(User);
