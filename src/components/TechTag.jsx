import styled from "styled-components";

const TechTagItem = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  color: #bc4749;

  border-radius: 2px;
  border: 1px solid #bc4749;

  display: inline-flex;
  padding: 2px 8px;
  align-items: center;
  margin: 2px 0;
`;

const TechTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 16px 0;
`;

export const TechTag = ({ tech = [] }) => {
  return (
    <TechTagWrapper>
      {tech.map((item, index) => (
        <TechTagItem key={index}>{item}</TechTagItem>
      ))}
    </TechTagWrapper>
  );
};
