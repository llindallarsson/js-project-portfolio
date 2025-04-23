import ProjectCard from "../components/ProjectCard";
import { SectionHeader } from "../components/Typography";

const ProjectsSection = () => {
  return (
    <>
      <SectionHeader>Featured projects</SectionHeader>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </>
  );
};

export default ProjectsSection;
