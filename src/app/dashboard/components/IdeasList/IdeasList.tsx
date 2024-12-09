"use client";
import {
  Box,
  Card,
  CardBody,
  Flex,
  List,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";
import { IDEAS_API } from "@/app/utils";
import ListHeader from "@/app/dashboard/components/ListHeader";
import IdeaListItem from "@/app/dashboard/components/IdeaListItem";
import InfoTooltip from "@/app/components/InfoTooltip";

import { AiFillCheckSquare } from "react-icons/ai";
import { useMemo, useState } from "react";
import {
  EntityStatus,
  Idea,
  IdeaCategory,
  ProgressSteps,
} from "@/app/types/common";
import { IdeasFilters } from "@/app/dashboard/components/Filters";

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

  const [selectedCategories, setSelectedCategories] = useState<IdeaCategory[]>(
    []
  );
  const [selectedStatuses, setSelectedStatuses] = useState<EntityStatus[]>([]);
  const [selectedProgress, setSelectedProgress] = useState<ProgressSteps[]>([]);

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea: Idea) => {
      const matchesCategory =
        !selectedCategories.length ||
        selectedCategories.includes(idea.category as IdeaCategory);
      const matchesStatus =
        !selectedStatuses.length || selectedStatuses.includes(idea.status);
      const matchesProgress =
        !selectedProgress.length || selectedProgress.includes(idea.progress);

      return matchesCategory && matchesStatus && matchesProgress;
    });
  }, [ideas, selectedCategories, selectedStatuses, selectedProgress]);

  const totalIdeas = ideas.length;

  const ideaCategoryCounts = useMemo(() => {
    return ideas.reduce((acc: Record<string, number>, idea: Idea) => {
      acc[idea.category] = (acc[idea.category] || 0) + 1;
      return acc;
    }, {});
  }, [ideas]);

  const implementedIdeasCount = useMemo(() => {
    return ideas.filter((idea: Idea) => idea.progress === ProgressSteps.Done)
      .length;
  }, [ideas]);

  const newIdeasCount = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return ideas.filter((idea: Idea) => {
      const ideaDate = new Date(idea.createdAt);
      return ideaDate >= today;
    }).length;
  }, [ideas]);

  if (isLoading) return <Text>Loading...</Text>;

  const handleCategoryChange = (categories: IdeaCategory[]) => {
    setSelectedCategories(categories);
  };

  const handleStatusChange = (statuses: EntityStatus[]) => {
    setSelectedStatuses(statuses);
  };

  const handleProgressChange = (progress: ProgressSteps[]) => {
    setSelectedProgress(progress);
  };

  return (
    <>
      <Flex mb={4} gap={4}>
        <Card
          minW="200px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow={"md"}
        >
          <CardBody>
            <Text fontWeight="bold" textAlign={"center"}>
              Total Ideas
            </Text>
            <Text fontSize="6xl" fontWeight="bold" textAlign={"center"}>
              {totalIdeas}
            </Text>
            <Text textAlign={"center"}>New today: {newIdeasCount}</Text>
          </CardBody>
        </Card>

        <Card
          minW="200px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow={"md"}
        >
          <CardBody>
            <Text fontSize={"2xs"} textAlign={"center"} opacity={0.6}>
              Ideas by category
            </Text>
            <SimpleGrid
              columns={2}
              spacing={2}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "10%",
                right: "10%",
                height: "1px",
                bg: "gray.300",
                transform: "translateY(-50%)",
              }}
              _after={{
                content: '""',
                position: "absolute",
                left: "50%",
                top: "10%",
                bottom: "10%",
                width: "1px",
                bg: "gray.300",
                transform: "translateX(-50%)",
              }}
            >
              {Object.values(IdeaCategory).map((category) => (
                <Flex key={category} direction="column" align="center" p={2}>
                  <Text fontSize={"sm"}>{category}</Text>
                  <Box
                    borderRadius={"full"}
                    bg={"brand.text"}
                    w={8}
                    h={8}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text fontSize="2xl" fontWeight="bold" color="white">
                      {ideaCategoryCounts[category] || 0}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </CardBody>
        </Card>
        <Card
          minW="200px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow={"md"}
        >
          <CardBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            position={"relative"}
          >
            <Box pos={"absolute"} right={2} top={2}>
              <AiFillCheckSquare color="#008000" size={48} />
            </Box>
            <Text fontSize="6xl" fontWeight="bold">
              {implementedIdeasCount}
            </Text>
            <Text fontWeight={"bold"}>Ideas Implemented</Text>
          </CardBody>
        </Card>
        <IdeasFilters
          onProgressChange={handleProgressChange}
          onCategoryChange={handleCategoryChange}
          onStatusChange={handleStatusChange}
        />
      </Flex>

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
