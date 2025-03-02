'use client'

import { Box, Container, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import { useRouter } from "next/navigation";
import { ReviewCardsSlider } from "feedback-evolution-widget-react";
import { DEMO_PROJECT_ID } from "@/app/utils/defaults";

const ReviewCardsSliderDocs = () => {
  const router = useRouter();

  return (
    <Container maxW="container.lg" py={8}>
      <Button 
        onClick={() => router.push('/docs')}
        mb={4}
        leftIcon={<span>←</span>}
        variant="ghost"
        color="brand.main"
      >
        Back to Docs
      </Button>

      <Heading as="h1" mb={6}>ReviewCardsSlider Component</Heading>
      
      <Text mb={8}>
        The ReviewCardsSlider component allows you to showcase user feedback and reviews in an 
        interactive slider format. It automatically fetches and displays reviews from your project when their status is active. To update the status of a review, you can do so through your dashboard via the "Add to Display" button.
      </Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Live Demo</Heading>
        <Flex p={4} alignItems="center" justifyContent="center">
          <ReviewCardsSlider 
            projectId={DEMO_PROJECT_ID}
            sliderWidth={700}
            
          />
        </Flex>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Basic Usage</Heading>
        <Text mb={4}>The simplest way to use the ReviewCardsSlider:</Text>
        <CodeBlock 
          language="tsx"
          code={`import { ReviewCardsSlider } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

<ReviewCardsSlider 
  projectId="your-project-id"
  sliderWidth={700}
/>`}
        />
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Props</Heading>
        <Box overflowX="auto">
          <Table variant="simple" size={{ base: "sm", md: "md" }}>
            <Thead>
              <Tr>
                <Th whiteSpace="nowrap">Prop</Th>
                <Th whiteSpace="nowrap">Type</Th>
                <Th whiteSpace="nowrap">Default</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight="semibold" whiteSpace="nowrap">projectId</Td>
                <Td whiteSpace="nowrap">string</Td>
                <Td whiteSpace="nowrap">-</Td>
                <Td>Required. Your project's unique identifier</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold" whiteSpace="nowrap">sliderWidth</Td>
                <Td whiteSpace="nowrap">number</Td>
                <Td whiteSpace="nowrap">700</Td>
                <Td>Optional. Width of the slider in pixels</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
};

export default ReviewCardsSliderDocs; 