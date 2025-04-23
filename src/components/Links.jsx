import styled from "styled-components";

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #bc4749;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  cursor: pointer;
`;

export const LinkButton = styled(Link)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  background-color: #bc4749;
  color: white;
  padding: 8px 16px;
  border-radius: 40px;

  &:hover {
    background-color: #f5f5f5;
    color: #bc4749;
  }
`;
