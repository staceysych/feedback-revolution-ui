import { Flex, Tooltip, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfo } from "react-icons/ai";

const InfoTooltip = ({
  TooltipContent,
  label,
}: {
  TooltipContent: React.FC;
  label: string;
}) => {
  return (
    <Tooltip
      label={<TooltipContent />}
      placement="top"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
    >
      <Flex alignItems={"center"} cursor={"pointer"} gap={1} ml={"auto"}>
        <Text color="gray.500" fontSize="sm">
          {label}
        </Text>
        <Badge background={"brand.text"} color="white" p={0}>
          <AiOutlineInfo />
        </Badge>
      </Flex>
    </Tooltip>
  );
};

export default InfoTooltip;
