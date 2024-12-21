"use client";

import { Idea, EntityStatus, ProgressSteps, EntityType } from "@/app/types/common";
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
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineMore,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {
  IDEAS_API,
  mapStatusToColor,
  sendRequest,
  getButtonText,
} from "@/app/utils";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import ProgressTracker from "@/app/dashboard/components/ProgressTracker";
import ArchiveDialog from "@/app/dashboard/components/ArchiveDialog/ArchiveDialog";

const IdeasListItem = ({
  idea,
  projectId,
}: {
  idea: Idea;
  projectId: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    `${IDEAS_API}/${projectId}/status`,
    sendRequest,
    {
      onSuccess: () => {
        mutate(`${IDEAS_API}/${projectId}`);
      },
    }
  );

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const buttonText = getButtonText(idea.status);

  const handleStatusChange = async (
    status: EntityStatus,
    progress?: ProgressSteps
  ) => {
    try {
      await trigger({
        status,
        progress,
        ideaId: idea._id,
      });
    } catch (error) {
      throw new Error("Failed to update review status");
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

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
          templateColumns="32px 50px 60px 1fr 80px 60px 70px 70px 170px 32px"
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
            <Text
              fontWeight="medium"
              maxW="60px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              <Badge
                colorScheme="green"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={1}
                width={"fit-content"}
              >
                <AiOutlineArrowUp />
                {idea.votes}
              </Badge>
            </Text>
          </GridItem>
          <GridItem>
            <Tooltip label={idea.user?.name || "visitor"}>
              <Text
                fontWeight="medium"
                maxW="60px"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {idea.user?.name || "visitor"}
              </Text>
            </Tooltip>
          </GridItem>

          <GridItem colSpan={1}>
            <Text noOfLines={2}>{idea.body}</Text>
          </GridItem>

          <GridItem>
            <Text fontSize="sm" color="gray.500">
              {new Date(idea.createdAt).toLocaleDateString()}
            </Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Text noOfLines={2} fontSize={"sm"}>
              {idea.category}
            </Text>
          </GridItem>

          <GridItem>
            <Text noOfLines={2} fontSize={"sm"}>
              {idea.progress || "N/A"}
            </Text>
          </GridItem>

          <GridItem>
            <Badge
              borderRadius={"full"}
              background={mapStatusToColor(idea.status)}
              fontSize={"10px"}
              px={2}
            >
              {idea.status}
            </Badge>
          </GridItem>

          {buttonText && (
            <GridItem display="flex" justifyContent="flex-end">
              {idea.status === EntityStatus.Inactive ? (
                <Menu>
                  <MenuButton as={Button} size="sm">
                    {buttonText?.text}
                  </MenuButton>

                  <MenuList minW="auto">
                    <MenuItem isDisabled cursor="default">
                      Select Progress
                    </MenuItem>
                    {Object.values(ProgressSteps).map((step) => (
                      <MenuItem
                        key={step}
                        onClick={() =>
                          handleStatusChange(buttonText.status, step)
                        }
                      >
                        {step}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleStatusChange(buttonText.status)}
                  isLoading={isMutating}
                >
                  {buttonText.text}
                </Button>
              )}
            </GridItem>
          )}

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
                {idea.status !== EntityStatus.Archived && (
                  <MenuItem onClick={onOpen}>Archive</MenuItem>
                )}
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>

        <Collapse in={isExpanded} unmountOnExit>
          <Flex mt={4} pl={12} justifyContent={"space-between"}>
            <VStack align="stretch" spacing={2}>
              <Text fontWeight="bold">Full idea text:</Text>
              <Text>{idea.body}</Text>
            </VStack>
            {idea.status === EntityStatus.Active && (
              <ProgressTracker
                progress={idea.progress}
                updateProgress={(progress) =>
                  handleStatusChange(idea.status, progress)
                }
              />
            )}
          </Flex>
        </Collapse>
      </Box>

      <ArchiveDialog
        isOpen={isOpen}
        onClose={onClose}
        onArchive={handleArchive}
        cancelRef={cancelRef}
        entityType={EntityType.Idea}
      />
    </ListItem>
  );
};

export default IdeasListItem;
