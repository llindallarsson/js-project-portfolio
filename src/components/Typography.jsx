import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #bc4749;
  margin: 16px 0 00;

  @media (min-width: 667px) {
    font-size: 64px;
  }

  @media (min-width: 1024px) {
    font-size: 96px;
  }
`;

export const TitelStyled = styled(Title)`
  color: #c96a6a;
  margin: 0 0 16px 0;
`;

export const StyledP = styled.p`
  font-family: "Courier Prime", monospace;
  font-size: 20px;
  margin: 16px 0;

  @media (min-width: 667px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

export const StyledPFooter = styled(StyledP)`
  text-align: center;
  font-weight: 700;

  @media (min-width: 667px) {
    font-size: 20px;
  }
`;

export const SectionHeader = styled.h2`
  color: #bc4749;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    display: none;
  }
`;
