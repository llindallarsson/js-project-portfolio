import styled from "styled-components";

const EmojiP = styled.h3`
  font-size: 64px;
  margin: 0;
`;

const BtsCardWrapper = styled.div`
  margin-bottom: 24px;
`;

export const BtsCard = ({ emoji, text }) => {
  return (
    <BtsCardWrapper>
      <EmojiP>{emoji}</EmojiP>
      <p>{text}</p>
    </BtsCardWrapper>
  );
};
