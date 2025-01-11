'use client'

import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
const PricingLink = ({
    variant,
    text,
    pricingLink
}: {
    variant: "outline" | "solid" | undefined,
    text: string,
    pricingLink: string | undefined

}) => {
    const router = useRouter();

    const handlePricingClick = () => {
      if (pricingLink) {
        localStorage.setItem('pricingLink', pricingLink);
      }
      
      router.push('/sign-up');
    };
  return <Button
        mt="auto"
        size="md"
        variant={variant}
        colorScheme={variant === 'solid' ? 'black' : undefined}
        w="full"
        onClick={handlePricingClick}
        >
        {text}
    </Button>
}

export default PricingLink;