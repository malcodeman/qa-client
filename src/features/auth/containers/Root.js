import React, { Component } from "react";

import Login from "./Login";
import Signup from "./Signup";

class Root extends Component {
  state = {
    showLogin: false,
    showSignup: true
  };
  handleShowLogin = () => {
    this.setState({ showLogin: true, showSignup: false });
  };
  handleShowSignup = () => {
    this.setState({ showSignup: true, showLogin: false });
  };
  render() {
    const { showLogin } = this.state;
    return showLogin ? (
      <Login handleShowSignup={this.handleShowSignup} />
    ) : (
      <Signup handleShowLogin={this.handleShowLogin} />
    );
  }
}

export default Root;
