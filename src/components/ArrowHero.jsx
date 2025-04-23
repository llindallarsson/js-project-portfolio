import styled, { keyframes } from "styled-components";

const bounce = keyframes`
     0%, 100% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px); 
  }
  `;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media (min-width: 667px) {
    margin-top: 120px;
  }

  @media (min-width: 1024px) {
    margin-top: 180px;
  }
`;

const BounceArrow = styled.div`
  animation: ${bounce} 1.5s ease-in-out infinite;
`;

const ArrowHero = () => {
  return (
    <CenteredWrapper>
      <BounceArrow>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="56"
          viewBox="0 0 29 56"
          fill="none"
        >
          <path
            d="M24 9.33333L14.5 22L5 9.33333"
            stroke="#BC4749"
            strokeWidth="6"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </BounceArrow>
    </CenteredWrapper>
  );
};

export default ArrowHero;
