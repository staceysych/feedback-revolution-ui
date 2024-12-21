"use client";

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
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { AiOutlineDown, AiOutlineUp, AiOutlineMore } from "react-icons/ai";
import { Issue, IssueStatus, EntityType } from "@/app/types/common";

import { getSeverityColor, getStatusColor, getButtonTextForIssues } from "@/app/utils/issues";
import useSWRMutation from "swr/mutation";
import { ISSUES_API, sendRequest } from "@/app/utils";
import { mutate } from "swr";
import ArchiveDialog from "@/app/dashboard/components/ArchiveDialog/ArchiveDialog";

interface IssueListItemProps {
  issue: Issue
  projectId: string;
}

const IssueListItem = ({ issue, projectId }: IssueListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    `${ISSUES_API}/${projectId}/status`,
    sendRequest,
    {
      onSuccess: () => {
        mutate(`${ISSUES_API}/${projectId}`);
      },
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const buttonText = getButtonTextForIssues(issue.status);

  const handleStatusChange = async (status: IssueStatus) => {
    try {
      await trigger({
        status,
        issueId: issue._id,
      });
    } catch (error) {
      throw new Error("Failed to update issue status");
    }
  };

  const handleArchive = () => {
    onClose();
    handleStatusChange(IssueStatus.Archived);
  };

  return (
    <ListItem
      overflow="hidden"
      borderBottom="1px solid"
      borderColor="gray.200"
      borderLeft="6px solid"
      borderLeftColor={getSeverityColor(issue.severity)}
      sx={{
        "&:first-of-type": {
          borderTopRadius: "md",
         },
        "&:last-of-type": {
          borderBottom: "none",
          borderBottomRadius: "md",
        },
      }}
    >
      <Box p={3}>
        <Grid
          templateColumns="32px 50px 1fr 60px 80px 70px 150px 32px"
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
            <Tooltip label={issue.user?.name || "visitor"}>
              <Text
                fontWeight="medium"
                maxW="60px"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                {issue.user?.name || "visitor"}
              </Text>
            </Tooltip>
          </GridItem>

          <GridItem>
            <Text noOfLines={2}>{issue.body}</Text>
          </GridItem>

          <GridItem>
            <Badge color={getSeverityColor(issue.severity)} bg="transparent">
              {issue.severity}
            </Badge>
          </GridItem>

          <GridItem>
            <Text fontSize="sm" color="gray.500">
              {new Date(issue.createdAt).toLocaleDateString()}
            </Text>
          </GridItem>

          <GridItem>
            <Badge
              bg={getStatusColor(issue.status)}
              px={2}
              borderRadius="full"
              fontSize={"10px"}
            >
              {issue.status}
            </Badge>
          </GridItem>
          <GridItem display="flex" justifyContent="flex-end">
            {buttonText && (
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
            {issue.status !== IssueStatus.Archived && (
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
            <Flex mt={4} pl={12} justifyContent={"space-between"} gap={4}>
                <VStack align="stretch" spacing={2}>
                <Text fontWeight="bold">Full idea text:</Text>
                <Text>{issue.body}</Text>
                </VStack>
                <VStack align="stretch" spacing={2}>
                <Text fontWeight="bold">Page:</Text>
                <Text>{issue.page}</Text>
                </VStack>
                <VStack align="stretch" spacing={2} maxW="300px">
                <Text fontWeight="bold" mt={2} >Device:</Text>
                <Text>{issue.device}</Text>
                </VStack>

          </Flex>
        </Collapse>
      </Box>

      <ArchiveDialog
        isOpen={isOpen}
        onClose={onClose}
        onArchive={handleArchive}
        cancelRef={cancelRef}
        entityType={EntityType.Issue}
      />
    </ListItem>
  );
};

export default IssueListItem; 