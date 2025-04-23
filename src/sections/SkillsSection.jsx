import styled from "styled-components";
import { SkillSeparater, SkillComponent } from "../components/SkillComponent";
import { SectionHeader } from "../components/Typography";

const SkillWrapper = styled.section`
  margin: 40px 0;
`;

const SkillsSection = () => {
  return (
    <SkillWrapper>
      <SectionHeader>Skills</SectionHeader>
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
          "Google Accessibility Testing",
        ]}
      ></SkillComponent>
    </SkillWrapper>
  );
};

export default SkillsSection;
