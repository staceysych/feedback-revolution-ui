"use client";

import {
  Idea,
  IdeaStatus,
  ProgressSteps,
  ReviewStatus,
} from "@/app/types/common";
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
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineMore,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { IDEAS_API, mapStatusToColor, sendRequest } from "@/app/utils";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

const getButtonText = (status: IdeaStatus) => {
  switch (status) {
    case IdeaStatus.Inactive:
      return { text: "Add to Display", status: IdeaStatus.Active };
    case IdeaStatus.Active:
      return { text: "Remove from Display", status: IdeaStatus.Inactive };
    case IdeaStatus.Archived:
      return null;
    default:
      return null;
  }
};

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

  const handleStatusChange = async (progress?: ProgressSteps) => {
    try {
      await trigger({
        status: buttonText?.status,
        progress,
        ideaId: idea._id,
      });
    } catch (error) {
      throw new Error("Failed to update review status");
    }
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
              {idea.status === IdeaStatus.Inactive ? (
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
                        onClick={() => handleStatusChange(step)}
                      >
                        {step}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleStatusChange()}
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
                <MenuItem onClick={() => console.log("Archive clicked")}>
                  Archive
                </MenuItem>
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>

        <Collapse in={isExpanded} unmountOnExit>
          <VStack align="stretch" mt={4} pl={12} spacing={2}>
            <Text fontWeight="bold">Full idea text:</Text>
            <Text>{idea.body}</Text>
          </VStack>
        </Collapse>
      </Box>
    </ListItem>
  );
};

export default IdeasListItem;