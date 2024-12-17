import React, { useState } from "react";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  TagCloseButton,
  Divider,
  Stack,
} from "@chakra-ui/react";

import { AiOutlineDown, AiOutlineCheck } from "react-icons/ai";
import { EntityStatus } from "@/app/types/common";

interface IFilterProps {
  onRatingChange: (values: string[]) => void;
  onStatusChange: (values: string[]) => void;
}

const ReviewsFilters = ({ onRatingChange, onStatusChange }: IFilterProps) => {
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleRatingSelect = (value: string) => {
    const newSelected = selectedRatings.includes(value)
      ? selectedRatings.filter((item) => item !== value)
      : [...selectedRatings, value];

    setSelectedRatings(newSelected);
    onRatingChange(newSelected);
  };

  const handleStatusSelect = (value: string) => {
    const newSelected = selectedStatuses.includes(value)
      ? selectedStatuses.filter((item) => item !== value)
      : [...selectedStatuses, value];

    setSelectedStatuses(newSelected);
    onStatusChange(newSelected);
  };
  return (
    <Box 
      ml={{ base: 0, md: "auto" }}
      maxWidth={{ base: "100%", lg: "600px" }}
      width="auto"
    >
      <Stack 
        direction={{ base: "column", sm: "row" }}
        spacing={4} 
        justify={{ base: "flex-start", sm: "flex-end" }}
        width="100%"
      >
        <Menu closeOnSelect={false} matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w={{ base: "100%", sm: "140px" }}
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedRatings.length
              ? `Rating (${selectedRatings.length})`
              : "Rating"}
          </MenuButton>
          <MenuList>
            {[1, 2, 3, 4, 5].map((rating) => (
              <MenuItem
                key={rating}
                onClick={() => handleRatingSelect(rating.toString())}
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <span>
                  {rating} {rating === 1 ? "Star" : "Stars"}
                </span>
                {selectedRatings.includes(rating.toString()) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Menu closeOnSelect={false} matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w={{ base: "100%", sm: "140px" }}
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedStatuses.length
              ? `Status (${selectedStatuses.length})`
              : "Status"}
          </MenuButton>
          <MenuList>
            {Object.values(EntityStatus).map((status) => (
              <MenuItem
                key={status}
                onClick={() => handleStatusSelect(status)}
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                {selectedStatuses.includes(status) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
      {selectedRatings.length || selectedStatuses.length ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}
      <Wrap spacing={2} justify={{ base: "flex-start", sm: "flex-end" }}>
        {selectedRatings.map((rating) => (
          <WrapItem key={`rating-${rating}`}>
            <Tag
              size="md"
              variant="outline"
              borderColor="brand.text"
              bg="white"
            >
              <TagLabel color="brand.text">{rating} Stars</TagLabel>
              <TagCloseButton
                color="brand.text"
                onClick={() => handleRatingSelect(rating)}
              />
            </Tag>
          </WrapItem>
        ))}
        {selectedStatuses.map((status) => (
          <WrapItem key={`status-${status}`}>
            <Tag
              size="md"
              variant="outline"
              borderColor="brand.text"
              bg="white"
            >
              <TagLabel color="brand.text">{status}</TagLabel>
              <TagCloseButton
                color="brand.text"
                onClick={() => handleStatusSelect(status)}
              />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default ReviewsFilters;
