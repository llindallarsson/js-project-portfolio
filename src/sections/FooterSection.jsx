import styled from "styled-components";
import { StyledPFooter } from "../components/Typography";
import { MediaLinks } from "../components/MediaLinks";

const FooterWrapper = styled.section`
  margin: 60px 0;
`;

const FooterSection = () => {
  return (
    <FooterWrapper>
      <MediaLinks />
      <StyledPFooter>
        Created by <br />
        Linda Larsson.
      </StyledPFooter>
    </FooterWrapper>
  );
};

export default FooterSection;
