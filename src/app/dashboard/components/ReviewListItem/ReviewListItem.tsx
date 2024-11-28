"use client";

import { Review, ReviewStatus } from "@/app/types/common";
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  ListItem,
  Text,
  Badge,
  Collapse,
  VStack,
  Tooltip,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp, AiOutlineMore } from "react-icons/ai";
import { mapStatusToColor } from "@/app/utils";

const getButtonText = (status: ReviewStatus) => {
  switch (status) {
    case ReviewStatus.Inactive:
      return "Add to Display";
    case ReviewStatus.Active:
      return "Remove from Display";
    case ReviewStatus.Archived:
      return null;
    default:
      return null;
  }
};

const ReviewListItem = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const buttonText = getButtonText(review.status);

  return (
    <ListItem
      overflow="hidden"
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
      sx={{
        "&:last-of-type": {
          borderBottom: "none",
        },
      }}
    >
      <Box p={3}>
        <Grid
          templateColumns="32px 60px 1fr 40px 80px 70px 170px 32px"
          gap={4}
          alignItems="center"
        >
          <GridItem>
            <IconButton
              aria-label="Expand row"
              size="sm"
              variant="ghost"
              icon={isExpanded ? <AiOutlineDown /> : <AiOutlineUp />}
              onClick={handleExpand}
            />
          </GridItem>

          <GridItem>
            <Tooltip label={review.user?.name || "visitor"}>
              <Text
                fontWeight="medium"
                maxW="60px"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {review.user?.name || "visitor"}
              </Text>
            </Tooltip>
          </GridItem>

          <GridItem colSpan={1}>
            <Text noOfLines={2}>{review.body}</Text>
          </GridItem>

          <GridItem>
            <Badge colorScheme="purple">{review.rating}/5</Badge>
          </GridItem>

          <GridItem>
            <Text fontSize="sm" color="gray.500">
              {new Date(review.createdAt).toLocaleDateString()}
            </Text>
          </GridItem>

          <GridItem>
            <Badge
              borderRadius={"full"}
              background={mapStatusToColor(review.status)}
              fontSize={"10px"}
              px={2}
            >
              {review.status}
            </Badge>
          </GridItem>

          <GridItem display="flex" justifyContent="flex-end">
            {buttonText && <Button size="sm">{buttonText}</Button>}
          </GridItem>

          <GridItem>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<AiOutlineMore />}
                variant="ghost"
                size="sm"
              />
              <MenuList minW="auto">
                <MenuItem onClick={() => console.log("Archive clicked")}>
                  Archive
                </MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>

        <Collapse in={isExpanded} unmountOnExit>
          <VStack align="stretch" mt={4} pl={12} spacing={2}>
            <Text fontWeight="bold">Additional Information:</Text>
          </VStack>
        </Collapse>
      </Box>
    </ListItem>
  );
};

export default ReviewListItem;
