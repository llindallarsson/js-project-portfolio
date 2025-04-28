import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { BtsCard } from "../components/BtsCard";

const BeyondScreenSectionWrapper = styled.section`
  @media (min-width: 667px) {
    padding: 0 100px 0 100px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding: 0 100px 0 100px;
  }
`;

export const BeyondScreenSection = () => {
  return (
    <BeyondScreenSectionWrapper>
      <SectionHeader>Beyond the screen</SectionHeader>
      <Sidebar>Beyond the screen</Sidebar>
      <div>
        <BtsCard
          emoji="🖼️"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></BtsCard>
        <BtsCard
          emoji="🐶"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></BtsCard>
        <BtsCard
          emoji="🍣"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></BtsCard>
      </div>
    </BeyondScreenSectionWrapper>
  );
};
