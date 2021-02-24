import React from "react";
import styled from "styled-components";
import Banner from "../assets/banner.svg";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutContainer = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding: 1%;
  width: 96%;
  margin: 1%;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const H1 = styled.h1`
  margin: 0;
  // margin-left: 6%;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.size || "xx-large"};
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
const H2 = styled.h2`
  margin: 0;
  // margin-left: 6%;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 275%;
  overflow-wrap: break-word;
`;

const BannerImage = styled.img`
  margin: auto 0;
  padding: 7%;
  height: 75%;
  width: 75%;
  @media (max-width: 768px) {
    padding: 10%;
    height: 50%;
    width: 50%;
  }
`;

const Button = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: black;
  background-color: mediumturquoise;
  margin: 6px 0px;
  margin-top: 15px;
  border: none;
  border-radius: 4px;
  padding: 12px 50px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <AboutContainer>
        <BannerImage src={Banner} />
      </AboutContainer>
      <AboutContainer>
        <H1>Shortening your URL?</H1>
        <H1 size="80px">skipto.site</H1>
        <H2>A free and open-source URL Shortener!</H2>
        <Button to="/shorten">Get Started!</Button>
      </AboutContainer>
    </HeroContainer>
  );
};

export default Hero;
