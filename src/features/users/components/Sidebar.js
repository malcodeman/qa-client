import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const Category = styled.li`
  margin-bottom: 20px;
  font-size: 0.8rem;
`;

const Heading = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  color: #ed1965;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const StyledLink = styled(NavLink)`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.6);
  padding: 8px 0;
  display: block;
  line-heght: 1;
  &.active {
    color: rgba(0, 0, 0, 1);
  }
`;

const Sidebar = props => {
  const { username } = props;

  return (
    <StyledSidebar>
      <List>
        <Category>
          <Heading>personal information </Heading>
          <List>
            <li>
              <StyledLink to={`/users/${username}/settings/`} exact>
                edit profile
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`/users/${username}/settings/story`}>
                developer story
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`/users/${username}/settings/job`}>
                job preferences
              </StyledLink>
            </li>
          </List>
        </Category>
        <Category>
          <Heading>email settings</Heading>
          <List>
            <li>
              <StyledLink to={`/users/${username}/settings/email`}>
                edit email settings
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`/users/${username}/settings/newsletters`}>
                newsletters
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`/users/${username}/settings/alerts`}>
                job alerts
              </StyledLink>
            </li>
          </List>
        </Category>
      </List>
    </StyledSidebar>
  );
};

export default Sidebar;
