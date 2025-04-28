import styled from "styled-components";
import { SkillSeparater, SkillComponent } from "../components/SkillComponent";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";

const SkillWrapper = styled.div`
  margin: 40px 0;
  width: 100%;

  @media (min-width: 667px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    padding: 0 12px;
    margin: 0;
  }
`;

const SkillSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;

  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    padding: 0 100px 0 100px;
  }
`;

const SkillsSection = () => {
  return (
    <SkillSectionWrapper>
      <SectionHeader>Skills</SectionHeader>
      <Sidebar>Skills</Sidebar>
      <SkillWrapper>
        <SkillComponent
          titel="Code"
          skill={[
            "HTML5",
            "CSS3",
            "JavaScript ES6",
            "TypeScript",
            "ES6",
            "JSX",
            "React",
            "React Hooks",
            "GitHub",
            "Node.js",
            "Responsive Design",
            "WCAG-compliant Accessibility",
          ]}
        ></SkillComponent>
        <SkillSeparater />
        <SkillComponent
          titel="Design"
          skill={[
            "Interface Design",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Accessibility design (WCAG)",
            "Inclusive Design",
            "Usability Testing",
            "Personas",
            "Customer Journeys",
            "Service Design",
          ]}
        ></SkillComponent>
        <SkillSeparater />
        <SkillComponent
          titel="Tools"
          skill={[
            "VS Code",
            "Figma",
            "Sketch",
            "Abstract",
            "Confluence",
            "Jira",
            "Miro",
            "InVision",
            "Google Analytics",
          ]}
        ></SkillComponent>
        <SkillSeparater />
        <SkillComponent
          titel="Work Methods"
          skill={[
            "Agile methodology",
            "Cross-functional Collaboration",
            "Stakeholder Management",
            "Double Diamond Framework",
            "Design Thinking",
            "A/B Testing",
            "Par-programming",
            "Mob-programming",
            "Accessibility Testing",
          ]}
        ></SkillComponent>
      </SkillWrapper>
    </SkillSectionWrapper>
  );
};

export default SkillsSection;
