import AboutOurWork from "./AboutOurWork";
import HeroSection from "./HeroSection";
import React from "react";
import Services from "./Services";
import WhatWeDo from "./WhatWeDo";
import AU from "./AU";
import GetFreeAdvice from "./GetFreeAdvice";
import Success from "./Success";
import Contacts from "./Contacts";

function Home() {
  return (
    <main className="main">
      <HeroSection />
      <AboutOurWork />
      <Services />
      <WhatWeDo />
      <AU />
      <GetFreeAdvice />
      <Success />
      <Contacts />
    </main>
  );
}

export default React.memo(Home);
