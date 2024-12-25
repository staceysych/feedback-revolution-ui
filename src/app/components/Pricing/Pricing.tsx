'use client';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useSubmitWaitListEmail } from "@/app/hooks/useSubmitWaitListEmail";

interface WaitlistForm {
  email: string;
}

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
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistForm>();

  const { onSubmit, loading } = useSubmitWaitListEmail(reset);

  const handleButtonClick = (planName: string) => {
    setSelectedPlan(planName);
  };

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
                      >
                        <Icon
                          as={feature.included ? AiOutlineCheck : AiOutlineClose}
                          w={5}
                          h={5}
                          color={feature.included ? 'green.500' : 'red.500'}
                          mr={2}
                        />
                        <Text fontSize="sm" color="brand.text">
                          {feature.name}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {selectedPlan === plan.name ? (
                    <Box mt="auto">   
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={!!errors.email} >
                      <InputGroup size="md">
                        <Input
                        pr="8rem"
                        type="email"
                        placeholder="Enter email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      <InputRightElement width="8rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          type="submit"
                          colorScheme="black"
                          isLoading={loading}
                        >
                          Join Waitlist
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  </form>
                  </Box>
                ) : (
                  <Button
                    mt="auto"
                    size="md"
                    variant={plan.buttonVariant}
                    colorScheme={plan.buttonVariant === 'solid' ? 'black' : undefined}
                    w="full"
                    onClick={() => handleButtonClick(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                )}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
} 