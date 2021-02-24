import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Header />
      <ParentContainer>
        <Hero />
      </ParentContainer>
      <Footer />
    </>
  );
};

export default Home;
