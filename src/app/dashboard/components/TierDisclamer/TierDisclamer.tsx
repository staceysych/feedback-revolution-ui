import { Tier } from "@/app/types/user";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface TierDisclaimerProps {
  tier: Tier;
}

const TierDisclaimer: React.FC<TierDisclaimerProps> = ({ tier }) => {
  if (tier !== Tier.Test) return null;

  return (
    <Box 
      p={4} 
      bg="red.50" 
      borderRadius="md"
      flex={1}
      height="fit-content"
      border="1px solid"
      borderColor="red.200"
    >
      <Text color="red.700" fontWeight="medium">
        Free tier users are limited to 1 project with a maximum of 5 reviews, 5 ideas, and 5 issues.
      </Text>
    </Box>
  );
};

export default TierDisclaimer;
