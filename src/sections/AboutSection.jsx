import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";

const AboutSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
    margin-top: 180px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    padding: 0 100px 0 100px;
    margin-top: 180px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-family: "Courier Prime";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #bc4749;
  text-underline-offset: 40%;
  margin-bottom: 60px;
  width: 100%;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <SectionHeader>About</SectionHeader>
      <Sidebar>About</Sidebar>
      <TextWrapper>
        <p>
          I’m a frontend developer with a strong technical foundation in{" "}
          <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript (ES6)</b>, <b>TypeScript</b>,
          and <b>React</b> – including <b>JSX</b> and <b>React Hooks</b> –
          paired with a background in UX design that gives me a keen eye for
          visual detail and user experience. <br /> <br />I build responsive,
          accessible, and high-performing interfaces using modern tools and best
          practices. My experience also includes <b>Node.js</b> for backend
          integration, version control with <b>GitHub</b>, and a strong focus on{" "}
          <b>WCAG-compliant accessibility</b> and <b>responsive design</b>.{" "}
          <br />
          <br />
          With the ability to navigate both design and development, I thrive in
          cross-functional teams where I can bridge the gap between concept and
          code – ensuring that the final product is not only functional, but
          also user-centered and visually refined. <br /> <br />
          Looking for someone who can code with precision, think like a
          designer, and speak both Figma and JavaScript? Let’s connect!
          <br />
          <br />
        </p>
        <StyledLink
          to="/about"
          style={{ color: "black" }}
          onClick={scrollToTop}
        >
          Get to know me more →{" "}
        </StyledLink>
      </TextWrapper>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
