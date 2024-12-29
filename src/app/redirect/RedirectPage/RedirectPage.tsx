'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

import { Session } from 'next-auth'
import useSWR from 'swr'
import { fetcher } from '@/app/utils/fetcher'
import { USER_API } from '@/app/utils'


const RedirectPage = ({session}: {session: Session | null}) => {
  const { data } = useSWR(USER_API, fetcher);
  const router = useRouter();
  const pricingLink = localStorage.getItem("pricingLink");

  useEffect(() => {
    if (pricingLink && session?.user?.email && data) {
      localStorage.removeItem("pricingLink");

      if(!data.customerId) {
        window.open(pricingLink + `?prefilled_email=${session.user.email}`, '_blank');
      }

      router.push("/dashboard");
    } else if (!pricingLink) {
      router.push("/dashboard");
    }
  }, [router, session, pricingLink, data]);

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
