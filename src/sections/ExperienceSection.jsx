import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { ExperienceComponent } from "../components/ExperienceComponent";

const SectionWrapper = styled.section`
  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 0 100px 0 100px;
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const ExperienceSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>My Journey</SectionHeader>
      <Sidebar>My Journey</Sidebar>
      <ContentContainer>
        <ExperienceComponent
          emoji="🎓"
          title="Technigo"
          employment="JavaScript Development"
          date="jan 2025 – present"
        />
        <ExperienceComponent
          emoji="💼"
          title="Arbetsförmedlingen"
          employment="UX Designer"
          date="sep 2022 – present"
        />
        <ExperienceComponent
          emoji="💼"
          title="Vivium"
          employment="UX Designer – Intern"
          date="apr  – Jul 2022"
        />
        <ExperienceComponent
          emoji="💼"
          title="Boappa, SBAB"
          employment="UX Designer – Intern"
          date="jan  – apr 2022"
        />
        <ExperienceComponent
          emoji="🎓"
          title="Changemaker Educations"
          employment="Experience Designer"
          date="okt 2020 – jul 2022"
        />
        <ExperienceComponent
          emoji="🎓"
          title="Mälardalens University"
          employment="Information Design"
          date="aug 2019 – okt 2020"
        />
      </ContentContainer>
    </SectionWrapper>
  );
};
