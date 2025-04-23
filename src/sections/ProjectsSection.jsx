import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import ProjectCard from "../components/ProjectCard";

const ProjectSectionWrapper = styled.section`
  margin: 120px 0;
`;

const ProjectsSection = () => {
  return (
    <ProjectSectionWrapper>
      <SectionHeader>Featured projects</SectionHeader>
      <ProjectCard
        title="Business project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="/images/business_project.png"
        imageAlt="Business project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
      <ProjectCard
        title="Recipe project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="/images/recipe_project.png"
        imageAlt="Recipe project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
      <ProjectCard
        title="Accessibility project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="/images/accessibility_project.png"
        imageAlt="Accessibility project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
    </ProjectSectionWrapper>
  );
};

export default ProjectsSection;
