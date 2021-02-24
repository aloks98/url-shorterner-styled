import React from "react";
import styled from "styled-components";
import logo from "../assets/skiptosite.svg";

const NavBar = styled.div`
  box-sizing: border-box;
  background: #0e161b;
  display: flex;
  justify-content: center;
  flex: 0 0 100%;
  padding: 14px;
`;

const Image = styled.img`
  height: 50px;
  margin: auto 0;
`;

const Header = () => {
  return (
    <NavBar>
      <Image src={logo} alt="skipto.site" />
    </NavBar>
  );
};

export default Header;
