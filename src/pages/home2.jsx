import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../banner.svg";
import {
  FormGroupContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
} from "../components/Form";

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BannerContainer = styled.div`
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

const FormContainer = styled.div`
  box-sizing: border-box;
  padding: 1%;
  width: 96%;
  margin: 1%;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 18%;
  }
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

const Button = styled.a`
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

const Home = () => {
  return (
    <>
      <Header />
      <ParentContainer>
        <BannerContainer>
          <AboutContainer>
            <BannerImage src={Banner} />
          </AboutContainer>
          <AboutContainer>
            <H1>Shortening your URL?</H1>
            <H1 size="80px">skipto.site</H1>
            <H2>A free and open-source URL Shortener!</H2>
            <Button href="#shorten">Get Started!</Button>
          </AboutContainer>
        </BannerContainer>
        <FormContainer id="shorten">
          <FormGroupContainer>
            <FormGroup onSubmit={() => alert("Submitted")}>
              <FormLabel>Long URL</FormLabel>
              <FormInput placeholder="Long URL" required></FormInput>
              <FormLabel>Slug</FormLabel>
              <FormInput
                placeholder="Optinal Back Half"
                width="40%"
                required
              ></FormInput>
              <FormButton type="submit">Shorten</FormButton>
            </FormGroup>
          </FormGroupContainer>
        </FormContainer>
      </ParentContainer>
    </>
  );
};

export default Home;
