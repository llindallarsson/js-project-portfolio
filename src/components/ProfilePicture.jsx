import styled, { keyframes } from "styled-components";

export const ProfilePicture = styled.img`
  border-radius: 100%;
  border: 4px solid #bc4749;
  object-fit: cover;
  width: 250px;
  height: 250px;

  @media (min-width: 667px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;
