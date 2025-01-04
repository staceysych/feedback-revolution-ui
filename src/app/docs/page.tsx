'use client'

import { Box, Container, Heading, Text, Link, Button, Divider } from "@chakra-ui/react";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import { useRouter } from "next/navigation";
import FAQ from "@/app/components/FAQ/FAQ";


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
        <Heading as="h2" size="lg" mb={4}>Step 3: Component Documentation</Heading>
        <Text mb={4}>Explore detailed documentation for each component:</Text>
        <Box display="flex" flexDirection="column" gap={2}>
          <Link href="/docs/feedback-widget" color="brand.main">
            FeedbackWidget - Collect users feedback
          </Link>
          <Link href="/docs/review-cards-slider" color="brand.main">
            ReviewCardsSlider - Display user reviews in an interactive slider
          </Link>
          <Link href="/docs/progress-cards-slider" color="brand.main">
            ProgressCardsSlider - Show progress updates in a slider format
          </Link>
          <Link href="/docs/total-reviews-rating" color="brand.main">
            TotalReviewsRating - Display overall rating and review count
          </Link>
        </Box>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 4: Start Collecting Feedback</Heading>
        <Text>
          Once integrated with components, your users can start providing feedback through the widget.
          All feedback will be collected and stored in your project dashboard.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Step 5: Manage Feedback</Heading>
        <Text>
          Access your project dashboard to manage feedback. Link to your project dashboard <Link href="/dashboard" color="brand.main" fontWeight="bold">here</Link>.
        </Text>
      </Box>

      <Divider my={8} />

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={6}>Frequently Asked Questions</Heading>
        <FAQ />
      </Box>
    </Container>
  );
};

export default DocsPage; 