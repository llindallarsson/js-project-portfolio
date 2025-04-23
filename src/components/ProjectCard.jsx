import styled from "styled-components";
import TechTag from "../components/TechTag";
import { LinkButton } from "./Links";

const LinkButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectCard = () => {
  return (
    <article>
      <img src="#" alt="" />
      <h3></h3>
      <p></p>
      <TechTag tech={["React", "Styled Components", "JavaScript"]} />
      <LinkButtonWrapper>
        <LinkButton>Live demo</LinkButton>
        <LinkButton>View the code</LinkButton>
      </LinkButtonWrapper>
    </article>
  );
};

export default ProjectCard;
