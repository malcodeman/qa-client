import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const Tab = styled(NavLink)`
  cursor: pointer;
  padding: 10px;
  margin-bottom: -1px;
  font-size: 0.8rem;
  border: 1px solid transparent;
  color: ${props => props.theme.primary};
  &.active {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.borderColor};
    border-bottom-color: ${props => props.theme.backgroundPrimary};
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
