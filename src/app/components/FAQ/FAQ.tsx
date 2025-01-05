'use client'

import { 
  Accordion, 
  AccordionItem, 
  AccordionButton, 
  AccordionPanel, 
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I get my project ID?",
      answer: "After signing up, create a new project in your dashboard. The project ID will be automatically generated and displayed in your project settings."
    },
    {
      question: "Can I customize the appearance of the feedback widget?",
      answer: "This feature will be coming soon for Pro tier users."
    },
    {
      question: "How can I track who submitted the feedback?",
      answer: "You can pass user information through the user prop: email and name. This will help you identify who submitted each piece of feedback in your dashboard."
    },
    {
      question: "Is it possible to have multiple widgets on the same page?",
      answer: "Yes, you can have multiple widgets on the same page by using different trigger components and configurations for each instance."
    },
  ];

  return (
    <Accordion allowMultiple width="100%">
      {faqItems.map((item, index) => (
        <AccordionItem key={index}>
          <h3>
            <AccordionButton 
              _expanded={{ bg: 'brand.main', color: 'white' }}
              _hover={{ bg: 'brand.light' }}
            >
              <Box flex="1" textAlign="left" fontWeight="semibold">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <Text>{item.answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ; 