import React from "react";
import styled from "styled-components";
import NotFoundImage from "../assets/4041.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  box-sizing: box-border;
  margin: auto 0;
  padding: 2%;
  padding-bottom: 0;
  height: 40%;
  width: 40%;
  @media (max-width: 768px) {
    padding-top: 15%;
    height: 70%;
    width: 70%;
  }
`;

const Info = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  color: white;
  text-align: center;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    padding-top: 10%;
    font-size: 2em;
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

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <Image src={NotFoundImage} />
        <Info>The page you requested couldn't be found.</Info>
        <Button to="/">Go Home</Button>
      </Container>
    </>
  );
};

export default NotFound;
