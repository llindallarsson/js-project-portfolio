import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import { Title, StyledP } from "../components/Typography";
import { Link } from "../components/Links";
import ArrowHero from "../components/ArrowHero";

const HeroWrapper = styled.main`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroSectionMain = () => {
  return (
    <HeroWrapper>
      <ProgressBar />
      <StyledP> {"<"} Hello, my name is</StyledP>
      <Title>
        Linda Larsson.
        <br />
        <div>I build nice things.</div>
      </Title>
      <StyledP>
        Get in touch 👉 <Link>larsson.ll@hotmail.com</Link>
        {" />"}
      </StyledP>
      <ArrowHero />
    </HeroWrapper>
  );
};

export default HeroSectionMain;
