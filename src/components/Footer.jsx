import React from "react";
import styled from "styled-components";
import logo from "../assets/aloks.svg";

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const Image = styled.img`
  height: 50px;
  width: 150px;
  margin: 0;
  padding: 0;
`;

const FooterInfo = styled.p`
    color: white;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FooterInfo>Made with 💝 by</FooterInfo>
      <Image src={logo} alt="aloks.dev" />
    </FooterContainer>
  );
};

export default Footer;
