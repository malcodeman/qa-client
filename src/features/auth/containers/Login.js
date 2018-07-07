import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { login } from "../actions/auth_actions";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  padding: 24px;
  background-color: #fff;
  width: 256px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  text-align: center;
`;

const Text = styled.p`
  color: #262626;
  font-size: 0.8rem;
`;

const Span = styled.span`
  color: #007aff;
  cursor: pointer;
`;

class Login extends Component {
  render() {
    const { login, handleShowSignup } = this.props;
    return (
      <Content>
        <LoginForm login={login} />
        <LoginWrapper>
          <Text>
            Don't have an account?{" "}
            <Span onClick={handleShowSignup}>Sign up</Span>
          </Text>
        </LoginWrapper>
      </Content>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
