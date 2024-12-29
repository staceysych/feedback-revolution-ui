
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
} from '@chakra-ui/react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import PricingLink from '@/app/components/Pricing/components/PricingLink';


interface PricingFeature {
  name: string;
  included: boolean;
  inDevelopment?: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: 'solid' | 'outline';
  pricingLink?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Free/Tester',
    description: 'Perfect for trying out our service',
    price: 'Free',
    features: [
      { name: '1 project', included: true },
      { name: 'All widgets', included: true },
      { name: '5 reviews submitted', included: true },
      { name: '5 ideas submitted', included: true },
      { name: '5 issues submitted', included: true },
      { name: 'Unlimited submissions', included: false },
      { name: 'Dark mode', included: false, inDevelopment: true },
      { name: 'Widget customization', included: false, inDevelopment: true },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    pricingLink: '',
  },
  {
    name: 'Standard',
    description: 'Great for small businesses',
    price: '$9',
    period: '/month',
    features: [
      { name: '1 project', included: true },
      { name: 'All widgets', included: true },
      { name: 'Unlimited reviews', included: true },
      { name: 'Unlimited ideas', included: true },
      { name: 'Unlimited issues', included: true },
      { name: 'Dark mode', included: false, inDevelopment: true },
      { name: 'Widget customization', included: false, inDevelopment: true },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'solid',
    pricingLink: process.env.NEXT_PUBLIC_STRIPE_STANDARD_MONTHLY_PLAN_LINK,
  },
  {
    name: 'Pro',
    description: 'Best for medium-sized and business',
    price: '$19',
    period: '/month',
    features: [
      { name: 'Up to 3 projects', included: true },
      { name: 'All widgets', included: true },
      { name: 'Unlimited reviews', included: true },
      { name: 'Unlimited ideas', included: true },
      { name: 'Unlimited issues', included: true },
      { name: 'Dark mode (Coming Soon)', included: true, inDevelopment: true },
      { name: 'Widget customization (Coming Soon)', included: true, inDevelopment: true },
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    pricingLink: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_LINK,
  },
];

const Pricing = () =>  {
  return (
    <Box py={{ base: '16', sm: '24' }} bg="brand.pink">
      <Container maxW="7xl">
        <Stack spacing={4} as={Container} maxW="4xl" textAlign="center" mb={16}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight="bold"
            color="brand.text"
          >
            Pricing Plans
          </Heading>
          <Text fontSize={{ base: 'lg' }} color="brand.text">
            Choose the perfect plan for your needs
          </Text>
        </Stack>

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 6, lg: 8 }}
          alignItems="stretch"
        >
          {pricingPlans.map((plan) => (
            <Box
              key={plan.name}
              flex={1}
              borderRadius="2xl"
              bg="white"
              p={8}
              border="1px"
              borderColor="gray.200"
              display="flex"
              flexDirection="column"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                transform: 'scale(1.02)',
                boxShadow: 'lg'
              }}
            >
              <Stack spacing={4} flex="1">
                <Box>
                  <Heading size="lg" color="brand.text">
                    {plan.name}
                  </Heading>
                  <Text fontSize="sm" color="brand.text">
                    {plan.description}
                  </Text>
                  <Flex align="baseline" mt={4}>
                    <Text fontSize="4xl" fontWeight="bold" color="brand.text">
                      {plan.price}
                    </Text>
                    {plan.period && (
                      <Text fontSize="sm" fontWeight="semibold" color="brand.text">
                        {plan.period}
                      </Text>
                    )}
                  </Flex>

                  <List spacing={3} mt={4}>
                    {plan.features.map((feature) => (
                      <ListItem 
                        key={feature.name} 
                        display="flex" 
                        alignItems="center"
                        opacity={feature.inDevelopment && feature.included ? 0.5 : 1}
                        gap={1}
                      >
                        {feature.included ? <AiOutlineCheck size={24} color="green" /> : <AiOutlineClose size={24} color="red" />}
                        <Text fontSize="sm" color="brand.text">
                          {feature.name}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                  <PricingLink
                    variant={plan.buttonVariant}
                    text={plan.buttonText}
                    pricingLink={plan.pricingLink}
                  />
                
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
} 

export default Pricing;