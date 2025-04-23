import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Title from "../components/Typography";
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
      <p> {"<"} Hello, my name is</p>
      <Title>
        Linda Larsson.
        <br />
        <div>I build nice things.</div>
      </Title>
      <p>
        Get in touch 👉 <Link>larsson.ll@hotmail.com</Link>
        {" />"}
      </p>
      <ArrowHero />
    </HeroWrapper>
  );
};

export default HeroSectionMain;
