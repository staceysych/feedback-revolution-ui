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
  Stack,
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
    <Box 
      ml={{ base: 0, md: "auto" }}
      maxWidth={{ base: "100%", lg: "500px" }}
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
            color="brand.text"
            borderColor="gray.200"
          >
            {selectedSeverities.length
              ? `Severity (${selectedSeverities.length})`
              : "Severity"}
          </MenuButton>
          <MenuList minWidth="unset">
            {severityLevels.map((severity) => (
              <MenuItem
                key={severity}
                onClick={() => handleSeveritySelect(severity)}
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <span>{severity}</span>
                {selectedSeverities.includes(severity) && (
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
            color="brand.text"
            borderColor="gray.200"
          >
            {selectedStatuses.length
              ? `Status (${selectedStatuses.length})`
              : "Status"}
          </MenuButton>
          <MenuList minWidth="unset">
            {statusTypes.map((status) => (
              <MenuItem
                key={status}
                onClick={() => handleStatusSelect(status)}
                display="flex"
                justifyContent="space-between"
                width="100%"
              >
                <span>{status}</span>
                {selectedStatuses.includes(status) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>

      {(selectedSeverities.length || selectedStatuses.length) ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}

      <Wrap spacing={2} justify={{ base: "flex-start", sm: "flex-end" }}>
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