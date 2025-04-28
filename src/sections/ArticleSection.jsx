import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { Accordion } from "../components/Accordion";

const SectionWrapper = styled.section`
  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 0 100px 0 100px;
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1; // Take remaining space
  width: 100%;
`;

export const ArticleSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>My thoughts</SectionHeader>
      <Sidebar>My thoughts</Sidebar>
      <ContentContainer>
        <Accordion title="Why coding?">
          <p>
            For several years, I worked within UX design, always striving to
            create user-friendly and accessible solutions. But time and time
            again, I faced the same challenge: even well-thought-out designs
            often needed to be adjusted or simplified once they reached the
            development stage. <br />
            <br />
            It was an important realization — that a great design also needs to
            be feasible to build. <br />
            <br />
            After repeatedly adapting my designs to fit development
            possibilities, a new passion started to grow. I didn’t just want to
            understand users better — I wanted to understand the code behind the
            solutions as well. I wanted to become the bridge between design and
            development. <br />
            <br />
            Today, I’m diving into frontend development and can clearly see how
            powerful the combination of UX design and coding truly is. By
            learning how to code, I’m able to create solutions that are not only
            aesthetically pleasing and user-friendly but also scalable,
            sustainable, and technically sound. <br />
            <br />
            I'm excited to continue growing at the intersection of design and
            technology — where great ideas can become real, usable experiences.
          </p>
        </Accordion>
      </ContentContainer>
    </SectionWrapper>
  );
};
