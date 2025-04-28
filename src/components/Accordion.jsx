import React, { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  margin: 2rem auto;
`;

const AccordionItemWrapper = styled.div`
  border-bottom: 2px solid #bc4749;
`;

const AccordionHeader = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease;

  &:hover {
    background: #f0c7c8;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  color: #bc4749;
`;

const AccordionContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const Accordion = ({ items = [] }) => {
  return (
    <AccordionWrapper>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </AccordionWrapper>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItemWrapper>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
        {title}
        <Icon>{isOpen ? "−" : "+"}</Icon>
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        <p>{content}</p>
      </AccordionContent>
    </AccordionItemWrapper>
  );
};
