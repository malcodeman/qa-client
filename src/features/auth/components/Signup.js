import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignupForm from "./SignupForm";

import { signup } from "../actions/auth_actions";

const Wrapper = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const StyledLink = styled(Link)`
  color: #007aff;
`;

class Signup extends Component {
  componentWillUnmount = () => {
    this.props.signupReset();
  };
  render() {
    return (
      <Wrapper>
        <Content>
          <SignupForm signup={this.props.signup} />
          <LoginWrapper>
            <Text>
              Have an account? <StyledLink to="/login">Log in</StyledLink>
            </Text>
          </LoginWrapper>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.question
  };
};

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
