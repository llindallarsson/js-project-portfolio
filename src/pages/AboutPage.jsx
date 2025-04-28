import React from "react";
import styled from "styled-components";
import FooterSection from "../sections/FooterSection";
import { HeroSectionAbout } from "../sections/HeroSectionAbout";
import { BeyondScreenSection } from "../sections/BeyondScreenSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ArticleSection } from "../sections/ArticleSection";
import { ToHomepageLink } from "../components/ToHomepageLink";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (min-width: 667px) {
    gap: 180px;
  }
`;

export const AboutPage = () => {
  return (
    <PageWrapper>
      <HeroSectionAbout />
      <ArticleSection />
      <BeyondScreenSection />
      <ExperienceSection />
      <FooterSection />
    </PageWrapper>
  );
};
