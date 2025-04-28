import styled from "styled-components";
import { ProgressBar } from "../components/ProgressBar";
import { StyledP } from "../components/Typography";
import { ProfilePicture } from "../components/ProfilePicture";
import { ToHomepageLink } from "../components/ToHomepageLink";

const HeroWrapper = styled.header`
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 667px) {
    flex-direction: row-reverse;
    gap: 60px;
  }
`;

const StyledPforAbout = styled(StyledP)`
  font-size: 20px;

  @media (min-width: 370px) {
    font-size: 32px;
  }
  @media (min-width: 667px) {
    font-size: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

export const HeroSectionAbout = () => {
  return (
    <HeroWrapper>
      <ProgressBar />
      <ToHomepageLink />
      <ContentWrapper>
        <ProfilePicture src="images/profile_picture.jpg" alt="Picture of me" />
        <StyledPforAbout>
          Turning pixels into code – with a designer’s eye and a developer’s
          mindset.
        </StyledPforAbout>
      </ContentWrapper>
    </HeroWrapper>
  );
};
