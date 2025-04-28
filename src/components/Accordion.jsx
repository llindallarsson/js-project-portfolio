import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #bc4749;
  padding: 24px 0;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-family: "Courier New", Courier, monospace;
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  color: black;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ReadLink = styled.div`
  color: #bc4749;
  font-size: 18px;
`;

const ExpandButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #bc4749;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionContent = styled.div`
  padding: 20px 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItem>
      <AccordionHeader onClick={toggleAccordion}>
        <Title>{title}</Title>
        <Controls>
          <ReadLink>{isOpen ? "close article" : "read article"}</ReadLink>
          <ExpandButton>{isOpen ? "-" : "+"}</ExpandButton>
        </Controls>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionItem>
  );
};
