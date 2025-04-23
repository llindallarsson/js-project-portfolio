import styled from "styled-components";
import TechTag from "../components/TechTag";
import { LinkButton } from "./Links";

const LinkButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 223px;
  object-fit: cover;
  border-radius: 12px;
`;

const ProjectCardWrapper = styled.article`
  margin: 64px 0;
`;

const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tech,
  liveLink,
  codeLink,
}) => {
  return (
    <ProjectCardWrapper>
      <ProjectImage src={imageSrc} alt={imageAlt || title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <TechTag tech={tech} />
      <LinkButtonWrapper>
        <LinkButton href={liveLink}>Live demo</LinkButton>
        <LinkButton href={codeLink}>View the code</LinkButton>
      </LinkButtonWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
