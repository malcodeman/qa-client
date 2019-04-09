import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled(NavLink)`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: -1px;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid transparent;
  &.active {
    border: 1px solid #ccc;
    border-bottom-color: #fff;
  }
`;

const Tabs = props => {
  const { username } = props;

  return (
    <Wrapper>
      <Tab to={`/users/${username}/`} exact>
        Profile
      </Tab>
      <Tab to={`/users/${username}/settings/`}>Edit Profile & Settings</Tab>
    </Wrapper>
  );
};

export default Tabs;
