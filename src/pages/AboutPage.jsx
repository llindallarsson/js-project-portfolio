import React from "react";
import FooterSection from "../sections/FooterSection";
import { HeroSectionAbout } from "../sections/HeroSectionAbout";
import { BeyondScreenSection } from "../sections/BeyondScreenSection";

export const AboutPage = () => {
  return (
    <>
      <HeroSectionAbout />
      <BeyondScreenSection />
      <FooterSection />
    </>
  );
};
