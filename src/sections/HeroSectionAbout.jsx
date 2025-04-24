import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { StyledP } from "../components/Typography";
import { ProfilePicture } from "../components/ProfilePicture";

const HeroWrapper = styled.main`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (min-width: 667px) {
    padding: 0 80px 0 80px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px 0 100px;
  }
`;

export const HeroSectionAbout = () => {
  return (
    <>
      <ProgressBar />
      <Link to="/"> Back to startpage → </Link>
      <HeroWrapper>
        <ProfilePicture src="images/profile_picture.jpg" alt="Picture of me" />
        <StyledP>
          "Turning pixels into code – with a designer’s eye and a developer’s
          mindset.
        </StyledP>
      </HeroWrapper>
    </>
  );
};
