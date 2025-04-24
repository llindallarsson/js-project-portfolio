import styled from "styled-components";
import { TechTag } from "./TechTag";
import { LinkButtonWithIcon } from "./Links";
import { LiveIcon, GitHubIcon } from "./Icons";

const LinkButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 667px) {
    flex-direction: row;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 12px;

  @media (min-width: 1224px) {
    max-width: 450px;
  }
`;

const ProjectCardWrapper = styled.article`
  margin-bottom: 64px;

  @media (min-width: 1224px) {
    display: flex;
    flex-direction: row;
    gap: 18px;
  }
`;

export const ProjectCard = ({
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
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <TechTag tech={tech} />
        <LinkButtonWrapper>
          <LinkButtonWithIcon
            href={liveLink}
            icon={<LiveIcon />}
            title="Live Demo"
          />
          <LinkButtonWithIcon
            href={codeLink}
            icon={<GitHubIcon />}
            title="View the code"
          />
        </LinkButtonWrapper>
      </div>
    </ProjectCardWrapper>
  );
};
