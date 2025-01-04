import { Box, Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6}>Privacy Policy</Heading>
      <Text mb={4}>Last updated: January 4, 2025</Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>1. Introduction</Heading>
        <Text>
          At Feedback Evolution, we value your privacy and are committed to protecting your personal data. 
          This Privacy Policy outlines what information we collect, how we use it, and your rights regarding that information. 
          By using our services, you agree to the collection and use of information as described here. Unless otherwise defined 
          in this Privacy Policy, the terms used have the same meanings as in our Terms and Conditions.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>2. Information We Collect</Heading>
        
        <Heading as="h3" size="md" mb={3}>2.1 Information You Provide</Heading>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Account Information: When you sign up for our services, we collect your name and email address</ListItem>
          <ListItem color="brand.text">Content Information: We collect any feedback or user-generated content that you choose to post through our widgets</ListItem>
        </UnorderedList>

        <Heading as="h3" size="md" mb={3}>2.2 Information We Collect Automatically</Heading>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Usage Data: Information such as your computer's Internet Protocol address (IP address), browser type and version</ListItem>
          <ListItem color="brand.text">Session Information: Pages visited, time and date of visits, time spent on pages</ListItem>
          <ListItem color="brand.text">Device Information: Type of device, unique device identifiers, operating system</ListItem>
          <ListItem color="brand.text">Cookies and Tracking Technologies: We use cookies for session management, preferences, and security purposes</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>3. How We Use Your Information</Heading>
        <UnorderedList>
          <ListItem color="brand.text">Provide and maintain our feedback collection and analysis services</ListItem>
          <ListItem color="brand.text">Notify you about changes to our service</ListItem>
          <ListItem color="brand.text">Allow participation in interactive features when you choose to do so</ListItem>
          <ListItem color="brand.text">Provide customer support and respond to your requests</ListItem>
          <ListItem color="brand.text">Gather analytics to improve our service</ListItem>
          <ListItem color="brand.text">Monitor usage and detect, prevent, and address technical issues</ListItem>
          <ListItem color="brand.text">Fulfill any other purpose for which you provide the information</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>4. Data Storage and Security</Heading>
        <Text mb={4}>
          Your data is stored securely in our systems with industry-standard security measures. 
          While we strive to use commercially acceptable means to protect your Personal Data, 
          no method of transmission over the Internet or electronic storage is 100% secure, 
          and we cannot guarantee absolute security.
        </Text>
        <Text>
          We retain your Personal Data only for as long as necessary to fulfill the purposes outlined 
          in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>5. Sharing Your Information</Heading>
        <Text mb={4}>
          We do not sell your personal information to third parties. However, we may share your information:
        </Text>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">With trusted service providers who assist in operating our services</ListItem>
          <ListItem color="brand.text">When required by law or valid requests by public authorities</ListItem>
          <ListItem color="brand.text">In the event of a business transaction (merger, acquisition, or asset sale)</ListItem>
          <ListItem color="brand.text">To protect the rights, property, or safety of our company, customers, or others</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>6. Your Rights</Heading>
        <Text mb={3}>Under data protection laws, particularly GDPR for EU residents, you have the following rights:</Text>
        <UnorderedList>
          <ListItem color="brand.text">Access your personal data and receive a copy in a structured format</ListItem>
          <ListItem color="brand.text">Correct inaccurate or incomplete data</ListItem>
          <ListItem color="brand.text">Request deletion of your data (right to be forgotten)</ListItem>
          <ListItem color="brand.text">Object to or restrict the processing of your data</ListItem>
          <ListItem color="brand.text">Withdraw consent at any time where processing is based on consent</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>7. Children's Privacy</Heading>
        <Text>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. 
          If we become aware that we have collected Personal Data from children without verification of parental consent, 
          we take steps to remove that information from our servers.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>8. Changes to This Privacy Policy</Heading>
        <Text>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
          on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>9. Contact Us</Heading>
        <Text>
          If you have any questions about this Privacy Policy or our practices, please contact us on X (Twitter):{' '}
          <Text as="span" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            <a href="https://x.com/dev_blondie" target="_blank" rel="noopener noreferrer">@dev_blondie</a>
          </Text>
        </Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy; 