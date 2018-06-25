import React, { Component } from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 40px 0;
  grid-gap: 20px;
`;

class Settings extends Component {
  render() {
    return (
      <Grid>
        <Sidebar />
        <div>Settings</div>
      </Grid>
    );
  }
}

export default Settings;
