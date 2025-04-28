import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #000;
  font-family: "Courier Prime";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-offset: 40%;
  margin-bottom: 60px;
  width: 100%;

  @media (min-width: 370px) {
    font-size: 20px;
  }
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const ToHomepageLink = () => {
  return (
    <StyledLink to="/" onClick={scrollToTop}>
      {" "}
      ← Back to Homepage{" "}
    </StyledLink>
  );
};
