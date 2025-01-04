import { Box, Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6}>Privacy Policy</Heading>
      <Text mb={4}>Last updated: 04 Jan, 2025</Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>1. Introduction</Heading>
        <Text>
          At Feedback Evolution, we value your privacy and are committed to protecting your personal data. 
          This Privacy Policy outlines what information we collect, how we use it, and your rights regarding that information. 
          By using our services, you agree to the collection and use of information as described here.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>2. Information We Collect</Heading>
        
        <Heading as="h3" size="md" mb={3}>2.1 Information You Provide</Heading>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Account Information: When you sign up for our services, we collect your name, email address.</ListItem>
          <ListItem color="brand.text">Content Information: We collect any feedback or user-generated content that you choose to post through our widgets.</ListItem>
        </UnorderedList>

        <Heading as="h3" size="md" mb={3}>2.2 Information We Collect Automatically</Heading>
        <UnorderedList mb={4}>
          <ListItem color="brand.text">Usage Data: We collect data about how you use our services, including session details, interactions, and activity logs.</ListItem>
          <ListItem color="brand.text">Cookies and Tracking Technologies: We use cookies and similar technologies to improve your experience and analyze usage patterns.</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>3. How We Use Your Information</Heading>
        <UnorderedList>
          <ListItem color="brand.text">Provide and maintain our feedback collection and analysis services</ListItem>
          <ListItem color="brand.text">Improve user experience through analytics and performance tracking</ListItem>
          <ListItem color="brand.text">Communicate with you about service updates and changes</ListItem>
          <ListItem color="brand.text">Ensure compliance with legal obligations and prevent misuse</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>4. Data Storage and Security</Heading>
        <Text>
          Your data is stored securely in our systems with industry-standard security measures. 
          However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>5. Sharing Your Information</Heading>
        <Text>
          We do not sell your personal information to third parties. However, we may share your information with trusted partners to provide essential services (such as hosting or analytics) or when legally required to comply with authorities.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>6. Your Rights</Heading>
        <Text mb={3}>Under data protection laws, you have the following rights:</Text>
        <UnorderedList>
          <ListItem color="brand.text">Access your personal data</ListItem>
          <ListItem color="brand.text">Correct inaccurate data</ListItem>
          <ListItem color="brand.text">Request deletion of your data</ListItem>
          <ListItem color="brand.text">Object to processing of your data</ListItem>a
          <ListItem color="brand.text">Data portability</ListItem>
        </UnorderedList>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>7. Children's Privacy</Heading>
        <Text>
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete such information.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>8. Contact Us</Heading>
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