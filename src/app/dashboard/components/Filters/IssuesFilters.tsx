"use client";

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
import { IssueSeverity, IssueStatus } from "@/app/types/common";

interface IssuesFiltersProps {
  onSeverityChange: (values: string[]) => void;
  onStatusChange: (values: string[]) => void;
}

const severityLevels = Object.values(IssueSeverity);
const statusTypes = Object.values(IssueStatus);

const IssuesFilters = ({ onSeverityChange, onStatusChange }: IssuesFiltersProps) => {
  const [selectedSeverities, setSelectedSeverities] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleSeveritySelect = (value: string) => {
    const newSelected = selectedSeverities.includes(value)
      ? selectedSeverities.filter((item) => item !== value)
      : [...selectedSeverities, value];

    setSelectedSeverities(newSelected);
    onSeverityChange(newSelected);
  };

  const handleStatusSelect = (value: string) => {
    const newSelected = selectedStatuses.includes(value)
      ? selectedStatuses.filter((item) => item !== value)
      : [...selectedStatuses, value];

    setSelectedStatuses(newSelected);
    onStatusChange(newSelected);
  };

  return (
    <Box ml="auto" maxWidth="500px">
      <HStack spacing={4} justifyContent="flex-end">
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w="140px"
            variant="outline"
            color="brand.text"
            borderColor="gray.200"
          >
            {selectedSeverities.length
              ? `Severity (${selectedSeverities.length})`
              : "Severity"}
          </MenuButton>
          <MenuList minW="140px">
            {severityLevels.map((severity) => (
              <MenuItem
                key={severity}
                onClick={() => handleSeveritySelect(severity)}
                display="flex"
                justifyContent="space-between"
              >
                <span>{severity}</span>
                {selectedSeverities.includes(severity) && (
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
            color="brand.text"
            borderColor="gray.200"
          >
            {selectedStatuses.length
              ? `Status (${selectedStatuses.length})`
              : "Status"}
          </MenuButton>
          <MenuList minW="140px">
            {statusTypes.map((status) => (
              <MenuItem
                key={status}
                onClick={() => handleStatusSelect(status)}
                display="flex"
                justifyContent="space-between"
              >
                <span>{status}</span>
                {selectedStatuses.includes(status) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>

      {(selectedSeverities.length || selectedStatuses.length) ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}

      <Wrap spacing={2} justify="flex-end">
        {selectedSeverities.map((severity) => (
          <WrapItem key={`severity-${severity}`}>
            <Tag
              size="md"
              variant="outline"
              borderColor="brand.text"
              bg="white"
            >
              <TagLabel color="brand.text">{severity}</TagLabel>
              <TagCloseButton
                color="brand.text"
                onClick={() => handleSeveritySelect(severity)}
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

export default IssuesFilters; 