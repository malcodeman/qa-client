import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import User from "../components/User";
import UserLoading from "../components/UserLoading";
import { getUsers } from "../actions/usersActionCreators";

const Grid = styled.div`
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

class Users extends React.Component {
  componentDidMount = () => {
    const { getUsers } = this.props;

    getUsers();
  };

  render() {
    const { loading, users } = this.props;

    return (
      <Grid>
        {loading ? <UserLoading /> : null}
        {users.map(user => {
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
        })}
      </Grid>
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
