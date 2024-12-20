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
import { EntityStatus, IdeaCategory, ProgressSteps } from "@/app/types/common";

interface IFilterProps {
  onCategoryChange: (values: IdeaCategory[]) => void;
  onStatusChange: (values: EntityStatus[]) => void;
  onProgressChange: (values: ProgressSteps[]) => void;
}

const IdeasFilters = ({
  onCategoryChange,
  onStatusChange,
  onProgressChange,
}: IFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<IdeaCategory[]>(
    []
  );
  const [selectedStatuses, setSelectedStatuses] = useState<EntityStatus[]>([]);
  const [selectedProgress, setSelectedProgress] = useState<ProgressSteps[]>([]);

  const handleCategorySelect = (value: IdeaCategory) => {
    const newSelected = selectedCategories.includes(value)
      ? selectedCategories.filter((item) => item !== value)
      : [...selectedCategories, value];
    setSelectedCategories(newSelected);
    onCategoryChange(newSelected);
  };

  const handleStatusSelect = (value: EntityStatus) => {
    const newSelected = selectedStatuses.includes(value)
      ? selectedStatuses.filter((item) => item !== value)
      : [...selectedStatuses, value];
    setSelectedStatuses(newSelected);
    onStatusChange(newSelected);
  };

  const handleProgressSelect = (value: ProgressSteps) => {
    const newSelected = selectedProgress.includes(value)
      ? selectedProgress.filter((item) => item !== value)
      : [...selectedProgress, value];
    setSelectedProgress(newSelected);
    onProgressChange(newSelected);
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
            w={{ base: "100%", sm: "150px" }}
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedCategories.length
              ? `Category (${selectedCategories.length})`
              : "Category"}
          </MenuButton>
          <MenuList minWidth="unset">
            {Object.values(IdeaCategory).map((category) => (
              <MenuItem
                key={category}
                onClick={() => handleCategorySelect(category)}
                display="flex"
                justifyContent="space-between"
              >
                <span>{category}</span>
                {selectedCategories.includes(category) && (
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
            w={{base: "100%", sm: "140px"}}
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedStatuses.length
              ? `Status (${selectedStatuses.length})`
              : "Status"}
          </MenuButton>
          <MenuList minWidth="unset">
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

        <Menu closeOnSelect={false} matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w={{base: "100%", sm: "150px"}}
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedProgress.length
              ? `Progress (${selectedProgress.length})`
              : "Progress"}
          </MenuButton>
          <MenuList minWidth="unset">
            {Object.values(ProgressSteps).map((progress) => (
              <MenuItem
                key={progress}
                onClick={() => handleProgressSelect(progress)}
                display="flex"
                justifyContent="space-between"
              >
                <span>{progress}</span>
                {selectedProgress.includes(progress) && (
                  <AiOutlineCheck color="brand.text" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>

      {selectedCategories.length ||
      selectedStatuses.length ||
      selectedProgress.length ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}

      <Wrap spacing={2} justify={{ base: "flex-start", sm: "flex-end" }}>
        {selectedCategories.map((category) => (
          <WrapItem key={`category-${category}`}>
            <Tag
              size="md"
              variant="outline"
              borderColor="brand.text"
              bg="white"
            >
              <TagLabel color="brand.text">{category}</TagLabel>
              <TagCloseButton
                color="brand.text"
                onClick={() => handleCategorySelect(category)}
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
        {selectedProgress.map((progress) => (
          <WrapItem key={`progress-${progress}`}>
            <Tag
              size="md"
              variant="outline"
              borderColor="brand.text"
              bg="white"
            >
              <TagLabel color="brand.text">{progress}</TagLabel>
              <TagCloseButton
                color="brand.text"
                onClick={() => handleProgressSelect(progress)}
              />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default IdeasFilters;
