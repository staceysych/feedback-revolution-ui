import { Box, Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6}>Terms of Service</Heading>
      <Text mb={4}>Last updated: January 4, 2025</Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>1. Agreement to Terms</Heading>
        <Text mb={4}>
          By accessing or using Feedback Evolution's services, including our website, widgets, and dashboard
          (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). This
          Agreement takes effect on the date on which you first use the Services. If you
          disagree with any part of these terms, you may not access or use our Services.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>2. Description of Services</Heading>
        <Text mb={4}>
          Feedback Evolution provides feedback collection and analysis tools, including but not limited to:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Feedback collection and display widgets</ListItem>
          <ListItem color="brand.text">Feedback dashboard</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>3. User Accounts</Heading>
        <Text mb={4}>
          To access certain features of our Services, you must register for an account. You agree to:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Provide accurate and complete information</ListItem>
          <ListItem color="brand.text">Maintain the security of your account credentials, including your project ID</ListItem>
          <ListItem color="brand.text">Promptly update any changes to your information</ListItem>
          <ListItem color="brand.text">Accept responsibility for all activities under your account</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>4. Acceptable Use</Heading>
        <Text mb={4}>You agree not to:</Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Use the Services for any illegal purpose</ListItem>
          <ListItem color="brand.text">Submit false or misleading information</ListItem>
          <ListItem color="brand.text">Interfere with or disrupt the Services</ListItem>
          <ListItem color="brand.text">Attempt to gain unauthorized access to the Services</ListItem>
          <ListItem color="brand.text">Use the Services to collect sensitive personal information</ListItem>
          <ListItem color="brand.text">Harass, abuse, or harm others through the Services</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>5. Intellectual Property</Heading>
        <Text mb={4}>
          The Services and their original content, features, and functionality are owned by Feedback Evolution
          and are protected by international copyright, trademark, and other intellectual property laws.
          Our widgets and tools may only be used in accordance with these Terms.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>6. User Content</Heading>
        <Text mb={4}>
          By submitting content through our Services (including feedback, comments, and suggestions), you:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Grant us the right to use and process this content for our Services</ListItem>
          <ListItem color="brand.text">Confirm you have the right to submit such content</ListItem>
          <ListItem color="brand.text">Understand that you are responsible for your content and what you display on your website via our widgets</ListItem>
        </UnorderedList>
        <Text mt={4}>
          Feedback Evolution is not responsible for what users do with the user-generated content displayed through our widgets.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>7. Payment Terms</Heading>
        <Text mb={4}>
          While Feedback Evolution is currently offered as a free service, we reserve the right to introduce paid features or transition to a paid service model at any time. By using our Services, you acknowledge and agree that:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">The service may transition from free to paid at our discretion</ListItem>
          <ListItem color="brand.text">We will provide adequate notice before implementing any paid features</ListItem>
          <ListItem color="brand.text">You will have the option to either subscribe to paid services or discontinue use</ListItem>
        </UnorderedList>
        <Text mb={4}>
          For any paid services we may introduce:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">You agree to pay all applicable fees</ListItem>
          <ListItem color="brand.text">Provide current and accurate billing information</ListItem>
          <ListItem color="brand.text">Automatically renew your subscription unless cancelled</ListItem>
        </UnorderedList>
        <Text mt={4}>
          As we continue to improve our Services and expand our offerings, prices may be introduced or increased. Any discounts
          provided are intended to help customers secure the current price without being affected by future increases.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>8. Refund Policy</Heading>
        <Text mb={4}>
          All payments for Feedback Evolution services, whether monthly or yearly, are generally non-refundable. 
          We do not offer refunds for any fees or charges, including partially used periods of subscription. 
          However, in exceptional cases, refunds may be issued at our discretion.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>9. Warranties and Disclaimers</Heading>
        <Text mb={4}>
          It is not warranted that the Services will meet your requirements or that their operation will be
          uninterrupted or error-free. All express and implied warranties or conditions not stated in this
          Agreement (including without limitation, loss of profits, loss or corruption of data, business
          interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under
          the applicable law, are excluded and expressly disclaimed.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>10. Limitation of Liability</Heading>
        <Text mb={4}>
          Feedback Evolution shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages resulting from your use or inability to use the Services. We shall not be liable
          by reason of any representation (unless fraudulent), or any implied warranty, condition, or other term,
          for any loss of profit or any indirect, special or consequential loss, damage, costs, expenses or
          other claims which arise out of or in connection with the provision of the Services.
        </Text>
        <Text mb={4}>
          In the event that Feedback Evolution is deemed liable for breach of this Agreement, you agree that
          our liability is limited to the amount actually paid by you for the Services.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>11. General Terms</Heading>
        <Text mb={4}>
          You acknowledge that no joint venture, partnership, employment, or agency relationship exists between
          you and Feedback Evolution as a result of your use of these Services. You agree not to hold yourself
          out as a representative, agent, or employee of Feedback Evolution.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>12. Termination</Heading>
        <Text mb={4}>
          We may terminate or suspend your account and access to the Services immediately, without prior
          notice, for any breach of these Terms. Upon termination, your right to use the Services will
          immediately cease.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>13. Changes to Terms</Heading>
        <Text mb={4}>
          We reserve the right to modify these Terms at any time. We will notify users of any material
          changes via email or through the Services. Your continued use of the Services after such
          modifications constitutes acceptance of the updated Terms.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>14. Contact Us</Heading>
        <Text>
          If you have any questions about these Terms, please contact us on X (Twitter):{' '}
          <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            <a href="https://x.com/dev_blondie" target="_blank" rel="noopener noreferrer">@dev_blondie</a>
          </Text>
        </Text>
      </Box>
    </Container>
  );
};

export default TermsOfService; 