import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "../../header/containers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

class Users extends Component {
  render() {
    const { name, username } = this.props.me;
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            profile {name}
            {username}
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(mapStateToProps)(Users);
