'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

import { Session } from 'next-auth'


const RedirectPage = ({session}: {session: Session | null}) => {
  const router = useRouter();
  const pricingLink = localStorage.getItem("pricingLink");

  useEffect(() => {
    if (pricingLink && session?.user?.email) {
      localStorage.removeItem("pricingLink");
      router.push(pricingLink + `?prefilled_email=${session.user.email}`);
    } else if (!pricingLink) {
      router.push("/dashboard");
    }
  }, [router, session, pricingLink]);

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <VStack spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text fontSize="lg" color="gray.600">
          Redirecting...
        </Text>
      </VStack>
    </Box>
  )
}

export default RedirectPage;
