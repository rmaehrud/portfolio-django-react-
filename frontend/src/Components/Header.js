import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  z-index: 10;
  border-bottom: 2px solid rgba(255, 255, 255, 0.03);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 90px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
`;


const Navigation = ({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/index">포트폴리오</SLink>
        </Item>
          <Item current={pathname === "/"}>
            <SLink to="/about">about</SLink>
          </Item>
      </List>
    </Header>
  );
};

export default withRouter(Navigation);
