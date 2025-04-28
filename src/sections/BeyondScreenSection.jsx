import styled from "styled-components";
import { SectionHeader } from "../components/Typography";
import { Sidebar } from "../components/Sidebar";
import { BtsCard } from "../components/BtsCard";

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

export const BeyondScreenSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Beyond the screen</SectionHeader>
      <Sidebar>Beyond the screen</Sidebar>
      <div>
        <BtsCard
          emoji="🖼️"
          text="I’m a passionate treasure hunter — at least when it comes to interior design and sustainable living. Few things make me happier than finding a hidden gem at a flea market and giving it a new story. Circular shopping lets me combine creativity with conscious choices — and fill my home with pieces that truly have character."
        ></BtsCard>
        <BtsCard
          emoji="🐶"
          text="I spend a lot of time with my dog — my favorite coworker and constant sidekick. Whether we’re exploring nature or just chilling on the couch, he’s always there to keep things fun, energetic, and (mostly) balanced. He’s the best kind of distraction during my work-from-home days!"
        ></BtsCard>
        <BtsCard
          emoji="🍣"
          text="I love to cook, eat, and dream about food — especially Asian cuisine. Sushi holds a special place in my heart (and kitchen), and I’m constantly trying out new recipes. One of my biggest dreams? Traveling to Japan to eat my way through the country, one sushi bar at a time."
        ></BtsCard>
      </div>
    </SectionWrapper>
  );
};
