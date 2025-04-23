import styled from "styled-components";

const SkillHeader = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 32px 0 16px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SkillItem = styled.li`
  list-style: none;
`;

export const SkillSeparater = styled.hr`
  width: 200px;
  border: 1px solid #bc4749;
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
