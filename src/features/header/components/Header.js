import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
  padding: 0 24px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  margin-right: 4px;
  color: ${props => props.theme.primary};
`;

const NameFirstLetter = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  color: #fff;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${props => props.theme.brand};
`;

const ProfilePhoto = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const Toolbar = props => {
  function handleLogOut() {
    localStorage.removeItem("token");
  }

  function renderMe() {
    const { me } = props;

    if (me.profilePhotoURL === null) {
      return (
        <Link to={`/users/${me.username}`}>
          <NameFirstLetter>{me.nameFirstLetter}</NameFirstLetter>
        </Link>
      );
    }
    return (
      <Link to={`/users/${me.username}`}>
        <ProfilePhoto src={me.profilePhotoURL} />
      </Link>
    );
  }

  return (
    <Header>
      <Nav>
        <Links>
          <StyledLink to="/">Home</StyledLink>{" "}
          <StyledLink to="/users">Users</StyledLink>
        </Links>
        <Links>
          <StyledLink to="/new-question">New Question</StyledLink>
          <StyledLink to="/" onClick={handleLogOut}>
            Log Out
          </StyledLink>
          {renderMe()}
        </Links>
      </Nav>
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  null
)(Toolbar);
