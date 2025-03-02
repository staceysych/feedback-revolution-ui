'use client'
import { Box, Container, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import { useRouter } from "next/navigation";
import { FeedbackWidget } from "feedback-evolution-widget-react";
import { DEMO_PROJECT_ID } from "@/app/utils/defaults";

const FeedbackWidgetDocs = () => {
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

      <Heading as="h1" mb={6}>FeedbackWidget Component</Heading>
      
      <Text mb={8}>
        The FeedbackWidget is the core component of Feedback Evolution. It provides a widget
        that allows your users to submit feedback, feature requests, and bug reports directly from your application.
      </Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Live Demo</Heading>
        <Flex p={4} alignItems="center" justifyContent="center">
          <FeedbackWidget 
            projectId={DEMO_PROJECT_ID}
            triggerComponent={<Button colorScheme="brand">Try the Widget</Button>}
          />
        </Flex>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Basic Usage</Heading>
        <Text mb={4}>The simplest way to use the FeedbackWidget:</Text>
        <CodeBlock 
          language="tsx"
          code={`import { FeedbackWidget } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

<FeedbackWidget 
  projectId="your-project-id"
  triggerComponent={<button>Give Feedback</button>}
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
                <Td fontWeight="semibold" whiteSpace="nowrap">triggerComponent</Td>
                <Td whiteSpace="nowrap">ReactNode</Td>
                <Td whiteSpace="nowrap">null</Td>
                <Td>Optional. Component that triggers the widget to open</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold" whiteSpace="nowrap">open</Td>
                <Td whiteSpace="nowrap">boolean</Td>
                <Td whiteSpace="nowrap">false</Td>
                <Td>Optional. Controls if the widget is open</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold" whiteSpace="nowrap">closable</Td>
                <Td whiteSpace="nowrap">boolean</Td>
                <Td whiteSpace="nowrap">true</Td>
                <Td>Optional. Whether the widget can be closed</Td>
              </Tr>
              <Tr>
                <Td fontWeight="semibold" whiteSpace="nowrap">user</Td>
                <Td whiteSpace="nowrap">object</Td>
                <Td whiteSpace="nowrap">null</Td>
                <Td>Optional. User information (email, name)</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Advanced Examples</Heading>
        
        <Text mb={4}>With user information:</Text>
        <CodeBlock 
          language="tsx"
          code={`<FeedbackWidget 
  projectId="your-project-id"
  triggerComponent={<button>Feedback</button>}
  user={{
    email: "user@example.com",
    name: "John Doe"
  }}
/>`}
        />

        <Text mt={6} mb={4}>Always open widget:</Text>
        <CodeBlock 
          language="tsx"
          code={`<FeedbackWidget 
  projectId="your-project-id"
  open={true}
  closable={false}
/>`}
        />
      </Box>
    </Container>
  );
};

export default FeedbackWidgetDocs; 