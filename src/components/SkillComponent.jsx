import styled from "styled-components";

const SkillHeader = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 16px 0;

  @media (min-width: 667px) {
    text-align: left;
    margin: 0 0 16px 0;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (min-width: 667px) {
    align-items: flex-start;
  }
`;

const SkillItem = styled.li`
  list-style: none;
`;

export const SkillSeparater = styled.hr`
  width: 200px;
  border: 1px solid #bc4749;
  margin-bottom: 36px;

  @media (min-width: 667px) {
    display: none;
  }
`;

export const SkillComponent = ({ titel, skill = [] }) => {
  return (
    <div>
      <SkillHeader>{titel}</SkillHeader>
      <SkillList>
        {skill.map((item, index) => (
          <SkillItem key={index}>{item}</SkillItem>
        ))}
      </SkillList>
    </div>
  );
};
