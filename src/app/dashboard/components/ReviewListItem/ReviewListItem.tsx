"use client";

import { EntityStatus, Review } from "@/app/types/common";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { AiOutlineDown, AiOutlineUp, AiOutlineMore } from "react-icons/ai";
import {
  mapStatusToColor,
  REVIEWS_API,
  sendRequest,
  getButtonText,
} from "@/app/utils";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

const ReviewListItem = ({
  review,
  projectId,
}: {
  review: Review;
  projectId: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { trigger, isMutating } = useSWRMutation(
    `${REVIEWS_API}/${projectId}/status`,
    sendRequest,
    {
      onSuccess: () => {
        mutate(`${REVIEWS_API}/${projectId}`);
      },
    }
  );

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const buttonText = getButtonText(review.status);

  const handleStatusChange = async (status: EntityStatus) => {
    try {
      await trigger({
        status,
        reviewId: review._id,
      });
    } catch (error) {
      throw new Error("Failed to update review status");
    }
  };

  const handleArchive = () => {
    onClose();
    handleStatusChange(EntityStatus.Archived);
  };

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
          borderBottom={isExpanded ? "1px solid" : "none"}
          borderColor="gray.200"
          pb={2}
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
            {buttonText?.text && (
              <Button
                size="sm"
                onClick={() => handleStatusChange(buttonText.status)}
                isLoading={isMutating}
              >
                {buttonText.text}
              </Button>
            )}
          </GridItem>

          <GridItem>
            {review.status !== EntityStatus.Archived && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<AiOutlineMore />}
                  variant="ghost"
                  size="sm"
                />
                <MenuList minW="auto">
                  <MenuItem onClick={onOpen}>Archive</MenuItem>
                </MenuList>
              </Menu>
            )}
          </GridItem>
        </Grid>

        <Collapse in={isExpanded} unmountOnExit>
          <VStack align="stretch" mt={4} pl={12} spacing={2}>
            <Text fontWeight="bold">Full review text:</Text>
            <Text>{review.body}</Text>
          </VStack>
        </Collapse>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Archive Review
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This review will no longer be visible in the dashboard.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} variant="outline">
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleArchive} ml={3}>
                Archive
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ListItem>
  );
};

export default ReviewListItem;
