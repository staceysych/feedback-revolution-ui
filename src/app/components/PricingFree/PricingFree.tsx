import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { AiOutlineCheck, AiOutlineInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

interface PricingFeature {
  name: string;
  inDevelopment?: boolean;
}

const features: PricingFeature[] = [
  { name: '1 project' },
  { name: 'All widgets' },
  { name: 'Unlimited reviews' },
  { name: 'Unlimited ideas' },
  { name: 'Unlimited issues' },
  { name: 'Dark mode', inDevelopment: true },
  { name: 'Widget customization', inDevelopment: true },
];

const PricingFree = () => {
  return (
    <Box py={{ base: '16', sm: '24' }} bg="brand.pink">
      <Container maxW="7xl">
        <Stack spacing={4} as={Container} maxW="4xl" textAlign="center" mb={16}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight="bold"
            color="brand.text"
          >
            Pricing
          </Heading>
          <Text fontSize={{ base: 'lg' }} color="brand.text">
            Feedback Evolution is free to use! Get started today and improve your product with user feedback.
          </Text>
        </Stack>

        <Box
          maxW="xl"
          mx="auto"
          borderRadius="2xl"
          bg="white"
          p={8}
          border="1px"
          borderColor="gray.200"
          transition="all 0.2s"
          _hover={{
            transform: 'scale(1.02)',
            boxShadow: 'lg'
          }}
        >
          <Stack spacing={4}>
            <Box>
              <Text fontSize="sm" color="brand.text">
                Everything you need to collect and manage feedback
              </Text>
              <Flex align="baseline" mt={4}>
                <Text fontSize="4xl" fontWeight="bold" color="brand.text">
                  Free
                </Text>
              </Flex>

              <List spacing={3} mt={4}>
                {features.map((feature) => (
                  <ListItem 
                    key={feature.name} 
                    display="flex" 
                    alignItems="center"
                    opacity={feature.inDevelopment ? 0.5 : 1}
                    gap={1}
                  >
                    <AiOutlineCheck size={24} color="green" />
                    <Text fontSize="sm" color="brand.text">
                      {feature.name}
                    </Text>
                    {feature.inDevelopment && (
                      <Tooltip label="This feature is in development" hasArrow placement="top">
                        <Box as="span" display="inline-flex" alignItems="center">
                          <AiOutlineInfoCircle size={16} color="gray" />
                        </Box>
                      </Tooltip>
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Link href="/sign-up" style={{ width: '100%' }}>
              <Button
                variant="solid"
                colorScheme="brand"
                size="lg"
                width="full"
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default PricingFree; 