import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../auth/actions/auth_actions";

const Wrapper = styled.div`
  flex-basis: 64px;
`;

const StyledHeader = styled.header`
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

const StyledLink = styled(Link)`
  margin-right: ${props => (props.marginright ? "10px" : "0")};
`;

const Button = styled.button`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 6px;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

class Header extends Component {
  logoutHandler = () => {
    this.props.logout(this.props.user);
  };
  render() {
    return (
      <Wrapper>
        <StyledHeader>
          <Nav>
            <div>
              <StyledLink to="/" marginright="true">
                Q/A internal
              </StyledLink>
              <StyledLink to="/users">Users</StyledLink>
            </div>
            <div>
              <Link to="/new-question">
                <Button>New Question</Button>
              </Link>
              <Button onClick={this.logoutHandler}>
                <span>Log Out</span>
              </Button>
            </div>
          </Nav>
        </StyledHeader>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    logout_success: state.auth.logout_success
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
