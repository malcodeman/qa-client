import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignupForm from "./SignupForm";

import { signup } from "../actions/auth_actions";

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

class Signup extends Component {
  render() {
    const { signup, handleShowLogin } = this.props;
    return (
      <Content>
        <SignupForm signup={signup} />
        <LoginWrapper>
          <Text>
            Have an account? <Span onClick={handleShowLogin}>Log in</Span>
          </Text>
        </LoginWrapper>
      </Content>
    );
  }
}

export default connect(
  null,
  { signup }
)(Signup);
