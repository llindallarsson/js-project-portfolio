import styled from "styled-components";

const Title = styled.h3`
  margin: 0;
`;

const ExperienceLayout = styled.div`
  @media (min-width: 667px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const ExperienceComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ExperienceComponent = ({ emoji, title, employment, date }) => {
  return (
    <ExperienceComponentWrapper>
      <div>{emoji}</div>
      <ExperienceLayout>
        <div>
          <Title>{title}</Title>
          <p>{employment}</p>
        </div>
        <div>
          <p>{date}</p>
        </div>
      </ExperienceLayout>
    </ExperienceComponentWrapper>
  );
};
