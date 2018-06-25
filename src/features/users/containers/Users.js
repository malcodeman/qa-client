import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import User from "../components/User";
import UserLoading from "../components/UserLoading";
import Header from "../../header/containers";
import { getUsers } from "../actions/users_actions";

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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

class Users extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };
  renderLoading = () => {
    return this.props.loading ? <UserLoading /> : null;
  };
  renderUsers = () => {
    if (this.props.users.length === 0 && this.props.loading === false) {
      return <p>No users</p>;
    } else {
      return this.props.users.map(user => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            createdAt={user.createdAt}
            profilePhotoURL={user.profilePhotoURL}
            nameFirstLetter={user.nameFirstLetter}
          />
        );
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {this.renderLoading()}
            {this.renderUsers()}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
