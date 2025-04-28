import styled from "styled-components";

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #bc4749;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  cursor: pointer;
  color: black;
`;

export const LinkButton = styled(Link)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  background-color: #bc4749;
  color: white;
  padding: 8px 16px;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f5f5f5;
    color: #bc4749;

    svg path {
      fill: #bc4749;
    }
  }
`;

export const LinkButtonWithIcon = ({ href, icon, title }) => {
  return (
    <LinkButton href={href} target="_blank">
      {icon}
      {title}
    </LinkButton>
  );
};

export const BackToHompage = styled.a`
  color: #000;
  font-family: "Courier Prime";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: 25%;
  text-underline-position: from-font;
`;
