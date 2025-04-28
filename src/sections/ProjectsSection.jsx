import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { ProjectCard } from "../components/ProjectCard";

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
          description="This was the very first project I worked on during my studies. I designed a fictional website for a museum and art exhibition, which gave me a chance to really explore CSS Flexbox and Grid for building responsive layouts."
          imageSrc="/images/business_project.png"
          imageAlt="Business project"
          tech={["HTML", "CSS"]}
          liveLink="https://earthenexpressions.netlify.app/"
          codeLink="https://github.com/llindallarsson/js-project-business-site"
        ></ProjectCard>
        <ProjectCard
          title="Recipe project"
          description="This was my first time working with APIs and JavaScript. I built a recipe app that fetches data dynamically, which really helped me understand how to connect the front end with external data sources."
          imageSrc="/images/recipe_project.png"
          imageAlt="Recipe project"
          tech={["JavaScript", "HTML", "CSS"]}
          liveLink="https://recipelibrary-lindal.netlify.app/"
          codeLink="https://github.com/llindallarsson/js-project-recipe-library"
        ></ProjectCard>
        <ProjectCard
          title="Accessibility project"
          description="In this project, I created a quiz application with a strong focus on accessibility. It was all about writing inclusive code and following WCAG guidelines to make sure the experience worked for everyone."
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
