import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import CardComponent from "../components/Price/CardComponent";
import CallToAction from "../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CardComponent />
      <CallToAction />
    </div>
  );
};

export default Home;
