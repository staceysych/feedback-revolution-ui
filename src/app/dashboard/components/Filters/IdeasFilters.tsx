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
    <Box ml={"auto"} maxWidth={"500px"}>
      <HStack spacing={4} justifyContent={"flex-end"}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w="150px"
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedCategories.length
              ? `Category (${selectedCategories.length})`
              : "Category"}
          </MenuButton>
          <MenuList minW={"150"}>
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
          <MenuList minW={"140"}>
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

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<AiOutlineDown />}
            w="150px"
            variant="outline"
            color={"brand.text"}
            borderColor="gray.200"
          >
            {selectedProgress.length
              ? `Progress (${selectedProgress.length})`
              : "Progress"}
          </MenuButton>
          <MenuList minW={"150"}>
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
      </HStack>

      {selectedCategories.length ||
      selectedStatuses.length ||
      selectedProgress.length ? (
        <Divider my={4} borderColor="gray.400" />
      ) : null}

      <Wrap spacing={2} justify="flex-end">
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
