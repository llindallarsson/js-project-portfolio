import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const ProgressContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #f0c7c8;
  height: ${(props) => props.barHeight};
`;

const ProgressIndicator = styled.div`
  height: 100%;
  background-color: #bc4749;
  width: ${(props) => props.scrollPercentage}%;
`;

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [barHeight, setBarHeight] = useState("4px");

  useEffect(() => {
    const handleResize = () => {
      setBarHeight(window.innerWidth >= 667 ? "8px" : "4px");
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    handleResize(); // set initial height
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProgressContainer barHeight={barHeight}>
      <ProgressIndicator scrollPercentage={scrollPercentage} />
    </ProgressContainer>
  );
};

export default ProgressBar;
