import React, { useState } from "react";
import styled from "styled-components";

const AccordionItem = styled.div`
  width: 100%;
  border-bottom: 2px solid #bc4749;
  padding: 24px 0;
  margin-bottom: 24px;
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
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out,
    padding 0.2s ease;
  padding: ${(props) => (props.isOpen ? "20px 0" : "0")};
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
          <ExpandButton isOpen={isOpen}>{isOpen ? "-" : "+"}</ExpandButton>
        </Controls>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionItem>
  );
};
