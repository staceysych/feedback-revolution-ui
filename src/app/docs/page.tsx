'use client'

import { Box, Container, Heading, Text, UnorderedList, ListItem, Link, Button } from "@chakra-ui/react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import { useRouter } from "next/navigation";

const DocsPage = () => {
  const router = useRouter();

  return (
    <Container maxW="container.lg" py={8}>
      <Button 
        onClick={() => router.push('/')}
        mb={4}
        leftIcon={<span>←</span>}
        variant="ghost"
        color="brand.main"
      >
        Back to Home
      </Button>

      <Heading as="h1" mb={6}>Getting Started with Feedback Evolution</Heading>
      
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 1: Sign Up and Create Your First Project</Heading>
        <Text>
          Start by signing up for Feedback Evolution <Link href="/sign-up" color="brand.main" fontWeight="bold">here</Link> and creating your first project in the <Link href="/dashboard" color="brand.main" fontWeight="bold">dashboard</Link>.
          This will give you access to your unique <strong>projectId</strong> needed for widget integration.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 2: Install the Widget Package</Heading>
        <Text mb={4}>Install the Feedback Evolution widget package in your project:</Text>
        <CodeBlock code="npm install feedback-evolution-widget-react" language="bash" />
        <Text mt={2}>or</Text>
        <CodeBlock code="yarn add feedback-evolution-widget-react" language="bash" />
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 3: Import and Use the Widget</Heading>
        <Text mb={4}>Import the widget and its styles in your component:</Text>
        <Box display={"flex"} flexDir={"column"} gap={4}>
        <CodeBlock 
          language="tsx"
          code={`import { FeedbackWidget } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

// Basic usage with the trigger component
<FeedbackWidget 
  projectId="your-project-id"
  triggerComponent={<button>Give Feedback</button>}
/>
  `}
        />
        <CodeBlock 
          language="tsx"
          code={`import { FeedbackWidget } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

// Advanced usage with user information
<FeedbackWidget 
  projectId="your-project-id"
  triggerComponent={<button>Give Feedback</button>}
  user={{
    email: "user@example.com",
    name: "John Doe"
  }}
  />
  
  `}
        />
        <CodeBlock 
          language="tsx"
          code={`import { FeedbackWidget } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

  // No trigger component and widget is always open
  <FeedbackWidget 
    projectId="your-project-id"
    open={true}
    closable={false}
    />
  `}
        />
        </Box>
        
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 4: Start Collecting Feedback</Heading>
        <Text>
          Once integrated, your users can start providing feedback through the widget.
          All feedback will be collected and stored in your project dashboard.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 5: Manage Feedback</Heading>
        <Text>
          Access your project dashboard to manage feedback. Link to your project dashboard <Link href="/dashboard" color="brand.main" fontWeight="bold">here</Link>.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 6: Display Reviews</Heading>
        <Text mb={4}>
          Showcase collected reviews using the ReviewCardsSlider component:
        </Text>
        <CodeBlock 
          language="tsx"
          code={`import { ReviewCardsSlider } from "feedback-evolution-widget-react";

<ReviewCardsSlider 
  projectId="your-project-id"
  sliderWidth={700}
/>`}
        />
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 7: Show Progress</Heading>
        <Text mb={4}>
          Display the progress of submitted ideas using the ProgressCardsSlider:
        </Text>
        <CodeBlock 
          language="tsx"
          code={`import { ProgressCardsSlider } from "feedback-evolution-widget-react";

<ProgressCardsSlider 
  projectId="your-project-id"
  sliderWidth={760}
/>`}
        />
      </Box>
    </Container>
  );
};

export default DocsPage; 