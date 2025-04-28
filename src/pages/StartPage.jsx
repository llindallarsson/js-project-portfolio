import styled from "styled-components";
import HeroSectionMain from "../sections/HeroSectionMain";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import FooterSection from "../sections/FooterSection";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (min-width: 667px) {
    gap: 180px;
  }
`;

export const StartPage = () => {
  return (
    <>
      <HeroSectionMain />
      <MainWrapper id="main">
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ProjectsSection></ProjectsSection>
        <FooterSection></FooterSection>
      </MainWrapper>
    </>
  );
};
