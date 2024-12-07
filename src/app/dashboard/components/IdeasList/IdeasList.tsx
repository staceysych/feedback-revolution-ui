"use client";
import { Card, CardBody, Flex, List, Text } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";
import { IDEAS_API } from "@/app/utils";
import ListHeader from "@/app/dashboard/components/ListHeader";
import IdeaListItem from "@/app/dashboard/components/IdeaListItem";
import InfoTooltip from "@/app/components/InfoTooltip";

import { useMemo, useState } from "react";
import { Idea } from "@/app/types/common";

const TooltipActionContent = () => (
  <Flex direction="column" p={2} maxW="300px">
    <Text fontWeight="bold" mb={2}>
      Available Actions:
    </Text>
    <Flex gap={2} mb={2}>
      <Text>
        "Add to Display" - Makes an idea visible on your website using our Idea
        Cards Slider.
      </Text>
    </Flex>
    <Flex gap={2}>
      <Text>"Remove from Display" - Hides an idea from your website.</Text>
    </Flex>
  </Flex>
);

const ActionColumnHeader = () => (
  <Flex align="center" gap={2}>
    <InfoTooltip TooltipContent={TooltipActionContent} label="actions" />
  </Flex>
);

const columns = [
  "",
  "votes",
  "user",
  "idea",
  "date",
  "category",
  "progress",
  "status",
  <ActionColumnHeader />,
];

const IdeasList = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useSWR(`${IDEAS_API}/${projectId}`, fetcher);
  const ideas = data?.data || [];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea: Idea) => {
      const matchesCategory =
        !selectedCategories.length ||
        selectedCategories.includes(idea.category);
      const matchesStatus =
        !selectedStatuses.length || selectedStatuses.includes(idea.status);
      return matchesCategory && matchesStatus;
    });
  }, [ideas, selectedCategories, selectedStatuses]);

  const totalIdeas = ideas.length;
  const totalVotes = ideas.reduce(
    (acc: number, idea: Idea) => acc + idea.votes,
    0
  );

  if (isLoading) return <Text>Loading...</Text>;

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleStatusChange = (statuses: string[]) => {
    setSelectedStatuses(statuses);
  };

  return (
    <>
      {!!filteredIdeas.length ? (
        <>
          <ListHeader
            columns={columns}
            templateColumns="32px 50px 60px 1fr 80px 60px 70px 70px 170px 32px"
          />
          <List
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
          >
            {filteredIdeas.map((idea: Idea) => (
              <IdeaListItem key={idea._id} idea={idea} projectId={projectId} />
            ))}
          </List>
        </>
      ) : (
        <Text>No ideas.</Text>
      )}
    </>
  );
};

export default IdeasList;
