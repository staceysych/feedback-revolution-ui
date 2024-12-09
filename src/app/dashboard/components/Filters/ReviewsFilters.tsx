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
    <Box ml={"auto"} maxWidth={"500px"}>
      <HStack spacing={4} justifyContent={"flex-end"}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w="140px"
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedRatings.length
              ? `Rating (${selectedRatings.length})`
              : "Rating"}
          </MenuButton>
          <MenuList minW="140px">
            {[1, 2, 3, 4, 5].map((rating) => (
              <MenuItem
                key={rating}
                onClick={() => handleRatingSelect(rating.toString())}
                display="flex"
                justifyContent="space-between"
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

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w="140px"
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedStatuses.length
              ? `Status (${selectedStatuses.length})`
              : "Status"}
          </MenuButton>
          <MenuList width="200px" minW="200px">
            {Object.values(EntityStatus).map((status) => (
              <MenuItem
                key={status}
                onClick={() => handleStatusSelect(status)}
                display="flex"
                justifyContent="space-between"
              >
                <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                {selectedStatuses.includes(status) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
      {selectedRatings.length || selectedStatuses.length ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}
      <Wrap spacing={2} justify="flex-end">
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
      </Wrap>{" "}
    </Box>
  );
};

export default ReviewsFilters;
