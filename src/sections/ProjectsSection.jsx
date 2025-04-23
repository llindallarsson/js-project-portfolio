import { SectionHeader } from "../components/Typography";
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <SectionHeader>Featured projects</SectionHeader>
      <ProjectCard
        title="Business project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="src/img/business_project.png"
        imageAlt="Business project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
      <ProjectCard
        title="Recipe project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="src/img/recipe_project.png"
        imageAlt="Recipe project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
      <ProjectCard
        title="Accessibility project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        imageSrc="src/img/accessibility_project.png"
        imageAlt="Accessibility project"
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
    </>
  );
};

export default ProjectsSection;
