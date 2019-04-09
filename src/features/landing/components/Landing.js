import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

import LoginForm from "../../auth/components/LoginForm";
import SignupForm from "../../auth/components/SignupForm";
import bg from "../assets/illustration.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 380px;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

const Header = styled.header``;

const Heading = styled.h1`
  font-size: 1rem;
  color: #3a3133;
`;

const Footer = styled.footer``;

const Text = styled.p`
  color: #3a3133;
  font-size: 0.8rem;
`;

const Signup = () => {
  return (
    <>
      <Header>
        <Heading>Signup</Heading>
      </Header>
      <SignupForm />
      <Footer>
        <Text>
          Have an account? <Link to="/login">Log in</Link>
        </Text>
      </Footer>
    </>
  );
};

const Login = () => {
  return (
    <>
      <Header>
        <Heading>Login</Heading>
      </Header>
      <LoginForm />
      <Footer>
        <Text>
          Don't have an account? <Link to="/">Sign up</Link>
        </Text>
      </Footer>
    </>
  );
};

const Landing = () => {
  return (
    <Grid>
      <ImageContainer />
      <Main>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
      </Main>
    </Grid>
  );
};

export default Landing;
