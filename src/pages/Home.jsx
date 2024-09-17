import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import CardComponent from "../components/Price/CardComponent";
import CallToAction from "../components/CallToAction/CallToAction";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CardComponent />
      <CallToAction />
      <Review />
    </div>
  );
};

export default Home;
