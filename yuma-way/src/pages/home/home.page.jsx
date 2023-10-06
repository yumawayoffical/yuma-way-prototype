import React from "react";
import { StyledPageContainer, StyledSpacing } from "../../main.styles";
import HomeHero from "./components/home-hero/home-hero.component";
import ExploreOurServices from "./components/explore-services/explore-our-services.component";
import HowItWorks from "./components/how-it-works/how-it-works.component";
import AboutKetamine from "./components/about-ketamine/about-ketamine.component";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <StyledPageContainer id="home-page">
        <ExploreOurServices />
        <StyledSpacing size={32} />
        <HowItWorks />
        <StyledSpacing size={32} />
        <AboutKetamine />
      </StyledPageContainer>
    </>
  );
};

export default HomePage;
