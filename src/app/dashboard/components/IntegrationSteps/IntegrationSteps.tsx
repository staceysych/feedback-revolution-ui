import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";

interface IntegrationStepsProps {
  projectId: string;
}

const IntegrationSteps: React.FC<IntegrationStepsProps> = ({ projectId }) => (
  <Box mt={8} p={6} borderWidth="1px" borderRadius="lg">
    <Heading size="md" mb={4}>Next Steps: Integrate with Your Website</Heading>
    
    <Stack spacing={6}>
      <Box>
        <Heading size="sm" mb={2}>1. Install the Package</Heading>
        <CodeBlock 
          code="npm install feedback-evolution-widget-react"
          language="bash"
        />
        <Text mt={2}>or</Text>
        <CodeBlock 
          code="yarn add feedback-evolution-widget-react"
          language="bash"
        />
      </Box>

      <Box>
        <Heading size="sm" mb={2}>2. Add the Widget to Your Website</Heading>
        <CodeBlock 
          code={`import { FeedbackWidget } from "feedback-evolution-widget-react";
import "feedback-evolution-widget-react/styles.css";

<FeedbackWidget 
  projectId="${projectId}"
  triggerComponent={<button>Give Feedback</button>}
/>`}
          language="tsx"
        />
      </Box>

      <Box>
        <Heading size="sm" mb={2}>3. Additional Components</Heading>
        <Text mb={2}>Showcase feedback on your website with these components:</Text>
        <UnorderedList spacing={2}>
          <ListItem>
            <Link 
              href="/docs/review-cards-slider" 
              color="brand.main"
              textDecoration="underline"
              _hover={{ color: "brand.600" }}
            >
              ReviewCardsSlider
            </Link>
            <Text as="span" color="brand.main">
              {" - Display user reviews"}
            </Text>
          </ListItem>
          <ListItem>
            <Link 
              href="/docs/progress-cards-slider" 
              color="brand.main"
              textDecoration="underline"
              _hover={{ color: "brand.600" }}
            >
              ProgressCardsSlider
            </Link>
            <Text as="span" color="brand.main">
              {" - Show feature progress"}
            </Text>
          </ListItem>
          <ListItem>
            <Link 
              href="/docs/total-reviews-rating" 
              color="brand.main"
              textDecoration="underline"
              _hover={{ color: "brand.600" }}
            >
              TotalReviewsRating
            </Link>
            <Text as="span" color="brand.main">
              {" - Show overall rating"}
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>

      <Flex gap={4}>
        <Button as={Link} href="/docs" colorScheme="brand">
          View Full Documentation
        </Button>
      </Flex>
    </Stack>
  </Box>
);

export default IntegrationSteps; 