import styled from "styled-components";

const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #bc4749;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  cursor: pointer;
`;

const LinkButton = () => {
  return <a href="#">Hej</a>;
};

export default Link;
