import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Sidebar from "../components/Sidebar";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 40px 0;
  grid-gap: 20px;
`;

class Settings extends Component {
  render() {
    const { username } = this.props.me;
    return (
      <Grid>
        <Sidebar username={username} />
        <div>Settings</div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(mapStateToProps)(Settings);
