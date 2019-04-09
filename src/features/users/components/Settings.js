import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Sidebar from "./Sidebar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 40px 0;
  grid-gap: 20px;
`;

const Settings = props => {
  const { username } = props.me;

  return (
    <Grid>
      <Sidebar username={username} />
      <div>Settings</div>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(mapStateToProps)(Settings);
