import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";
import { findMe } from "../../users/actions/users_actions";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const Header = styled.header`
  top: 0;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 6px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Span = styled.span`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

const ProfilePhoto = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const NameFirstLetter = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #007aff;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

class Toolbar extends Component {
  componentDidMount = () => {
    const { me, findMe } = this.props;
    if (me === null) {
      findMe();
    }
  };
  logoutHandler = () => {
    this.props.logout(this.props.me);
  };
  renderMe = () => {
    const { me } = this.props;
    if (me != null) {
      const { profilePhotoURL, nameFirstLetter } = me;
      if (profilePhotoURL) {
        return (
          <Link to={`/users/${me.username}`}>
            <ProfilePhoto src={profilePhotoURL} />
          </Link>
        );
      } else {
        return (
          <Link to={`/users/${me.username}`}>
            <NameFirstLetter>{nameFirstLetter}</NameFirstLetter>
          </Link>
        );
      }
    }
  };
  render() {
    const { url } = this.props.match;
    return (
      <Wrapper>
        <Header>
          <Nav>
            <div>
              <Link to="/">Q/A internal</Link> <Link to="/users">Users</Link>
            </div>
            <Grid>
              {url === "/new-question" ? null : (
                <StyledLink to="/new-question">New Question</StyledLink>
              )}
              <Span onClick={this.logoutHandler}>Log Out</Span>
              {this.renderMe()}
            </Grid>
          </Nav>
        </Header>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout, findMe }
  )(Toolbar)
);
