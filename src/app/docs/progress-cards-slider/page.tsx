'use client'

import { Box, Container, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import { useRouter } from "next/navigation";
import { ProgressCardsSlider } from "feedback-evolution-widget-react";
import { DEMO_PROJECT_ID } from "@/app/utils/defaults";

const ProgressCardsSliderDocs = () => {
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

      <Heading as="h1" mb={6}>ProgressCardsSlider Component</Heading>
      
      <Text mb={8}>
        The ProgressCardsSlider component displays the progress of implemented feedback and feature requests
        in an interactive slider format. It helps keep your users informed about how their feedback is being
        addressed.
      </Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Live Demo</Heading>
        <Flex p={4} alignItems="center" justifyContent="center">
          <ProgressCardsSlider 
            projectId={DEMO_PROJECT_ID}
            sliderWidth={760}
          />
        </Flex>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Basic Usage</Heading>
        <Text mb={4}>The simplest way to use the ProgressCardsSlider:</Text>
        <CodeBlock 
          language="tsx"
          code={`import { ProgressCardsSlider } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

<ProgressCardsSlider 
  projectId="your-project-id"
  sliderWidth={760}
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
                <Td whiteSpace="nowrap">760</Td>
                <Td>Optional. Width of the slider in pixels</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
};

export default ProgressCardsSliderDocs; 