import styled from "styled-components";

const SidebarWrapper = styled.section`
  display: none;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Sidebar = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-right: 16px;
    margin-right: 80px;
    border-right: 2px solid #bc4749;

    color: #bc4749;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: right;

    width: 110px;
    flex-shrink: 0;
    height: auto;
  }
`;
