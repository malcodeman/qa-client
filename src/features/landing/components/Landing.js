import React from "react";
import styled from "styled-components";

import Auth from "../../auth/containers/Root";

import illustation from "../illustation.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const IllustationContainer = styled.div`
  background-image: url(${illustation});
  background-size: cover;
  background-position: center;
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  return (
    <Grid>
      <IllustationContainer />
      <LoginContainer>
        <Auth />
      </LoginContainer>
    </Grid>
  );
};

export default Landing;
