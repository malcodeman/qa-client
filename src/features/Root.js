import React, { Component } from "react";

import Landing from "./landing/components/Landing";
import Home from "./questions/containers/Questions";

class Root extends Component {
  renderContent = () => {
    if (localStorage.getItem("token") === null) {
      return <Landing />;
    } else {
      return <Home />;
    }
  };
  render() {
    return this.renderContent();
  }
}

export default Root;
