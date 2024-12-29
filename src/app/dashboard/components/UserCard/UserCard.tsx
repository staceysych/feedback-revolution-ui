"use client";

import { Box, Text, Button, VStack, Heading, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Tier } from "@/app/types/user";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

interface UserCardProps {
  user: {
    userName: string;
    email: string;
    tier: string;
    subscriptionEnd: Date | null;
    customerId: string | null;
  };
}

const UserCard = ({ user }: UserCardProps) => {
  const isTestTier = user.tier.toLowerCase() === Tier.Test;
  const [selectedTier, setSelectedTier] = useState(Tier.Standard);
  
  const getPlanLink = () => {
    const baseUrl = selectedTier === Tier.Standard 
      ? process.env.NEXT_PUBLIC_STRIPE_STANDARD_MONTHLY_PLAN_LINK
      : process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_LINK;
    
    return `${baseUrl}?prefilled_email=${encodeURIComponent(user.email)}`;
  };

  return (
    <Box
      p={6}
      mb={6}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      width={{ base: "100%", lg: "600px" }}
    >
      <VStack align="stretch" spacing={3}>
        <Heading size="md">User Information</Heading>
        
        <Flex>
          <Text fontWeight="bold" width="150px">Name:</Text>
          <Text>{user.userName}</Text>
        </Flex>

        <Flex>
          <Text fontWeight="bold" width="150px">Email:</Text>
          <Text>{user.email}</Text>
        </Flex>

        <Flex>
          <Text fontWeight="bold" width="150px">Current Tier:</Text>
          <Text textTransform="capitalize">{user.tier.toLowerCase()}</Text>
        </Flex>

       {user.subscriptionEnd && <Flex>
          <Text fontWeight="bold" width="150px">Renewal Date:</Text>
          <Text>{new Date(user.subscriptionEnd).toLocaleDateString()}</Text>
        </Flex>}

        {isTestTier && !user.customerId ? (
          <Flex gap={4}>
            <Menu>
              <MenuButton 
                as={Button} 
                rightIcon={<AiOutlineDown />} 
                variant="outline"
                minW="150px"
              >
                {selectedTier}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setSelectedTier(Tier.Standard)}>
                  Standard - $9/month
                </MenuItem>
                <MenuItem onClick={() => setSelectedTier(Tier.Pro)}>
                  Pro - $19/month
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              colorScheme="purple"
              as="a"
              href={getPlanLink()}
              target="_blank"
              flex={1}
            >
              Upgrade Now
            </Button>
          </Flex>
        ) : (
          <Button
            colorScheme="brand"
            variant="solid"
            as="a"
            href={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK}
            target="_blank"
          >
            Manage Subscriptions
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default UserCard;
