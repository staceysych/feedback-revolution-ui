import { Box, Text, Button, VStack, Heading, Flex } from "@chakra-ui/react";


interface UserCardProps {
  user: {
    userName: string;
    email: string;
    tier: string;
    subscriptionEnd: Date;
  };
}

const UserCard = ({ user }: UserCardProps) => {
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

        <Flex>
          <Text fontWeight="bold" width="150px">Renewal Date:</Text>
          <Text>{new Date(user.subscriptionEnd).toLocaleDateString()}</Text>
        </Flex>

        <Button
          colorScheme="brand"
          variant="solid"
          onClick={() => window.location.href = '/upgrade'}
        >
          Upgrade Plan
        </Button>
      </VStack>
    </Box>
  );
};

export default UserCard;
