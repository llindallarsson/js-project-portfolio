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
        tech={["Hej", "Ja"]}
        liveLink="https://github.com/llindallarsson"
        codeLink="https://github.com/llindallarsson"
      ></ProjectCard>
    </>
  );
};

export default ProjectsSection;
