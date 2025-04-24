import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { ProjectCard } from "../components/ProjectCard";
import { Sidebar } from "../components/Sidebar";

const ProjectSectionWrapper = styled.section`
  margin: 0;

  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 0 100px 0 100px;
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectSectionWrapper>
      <SectionHeader>Featured projects</SectionHeader>
      <Sidebar>
        Featured <br /> projects
      </Sidebar>
      <div>
        <ProjectCard
          title="Business project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          imageSrc="/images/business_project.png"
          imageAlt="Business project"
          tech={["HTML", "CSS"]}
          liveLink="https://earthenexpressions.netlify.app/"
          codeLink="https://github.com/llindallarsson/js-project-business-site"
        ></ProjectCard>
        <ProjectCard
          title="Recipe project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          imageSrc="/images/recipe_project.png"
          imageAlt="Recipe project"
          tech={["JavaScript", "HTML", "CSS"]}
          liveLink="https://recipelibrary-lindal.netlify.app/"
          codeLink="https://github.com/llindallarsson/js-project-recipe-library"
        ></ProjectCard>
        <ProjectCard
          title="Accessibility project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          imageSrc="/images/accessibility_project.png"
          imageAlt="Accessibility project"
          tech={["JavaScript", "HTML", "CSS"]}
          liveLink="https://accessibility-project-lindal.netlify.app/"
          codeLink="https://github.com/llindallarsson/js-project-accessibility"
        ></ProjectCard>
      </div>
    </ProjectSectionWrapper>
  );
};

export default ProjectsSection;
