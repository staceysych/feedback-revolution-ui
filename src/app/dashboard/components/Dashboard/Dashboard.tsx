"use client";

import { PROJECT_API, USER_API } from "@/app/utils";
import { fetcher } from "@/app/utils/fetcher";
import {
  Button,
  CircularProgress,
  Flex,
  Heading,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import React from "react";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";

import ProjectCard from "@/app/dashboard/components/ProjectCard";
import IntegrationSteps from "@/app/dashboard/components/IntegrationSteps";

const Dashboard = () => {
  const { data, isLoading } = useSWR(USER_API, fetcher);
  const toast = useToast();

  const { trigger, isMutating } = useSWRMutation(
    PROJECT_API,
    async (url) => {
      await fetch(url, {
        method: "POST",
      });
    },
    {
      onSuccess: () => {
        toast({
          title: "Project created successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        mutate(USER_API);
      },
    }
  );

  
  const handleCreateProject = async () => {
    try {
      await trigger();
    } catch (error) {
      throw new Error("Project creation failed");
    }
  };


  const projects = data?.projects.map((projectId: string, index: number) => (
    <ProjectCard
      key={projectId}
      name={`Project ${index + 1}: (${projectId})`}
      projectId={projectId}
    />
  ));

  const noProject = (
    <>
      <Heading>You have no project yet</Heading>
      <Button w={60} onClick={handleCreateProject} isLoading={isMutating}>
        Create a project
      </Button>
    </>
  );

  if (isLoading) {
    return (
      <Flex justifyContent={"center"}>
        <CircularProgress
          isIndeterminate
          color="brand.text"
          margin={"0 auto"}
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex 
        gap={4} 
        mb={4} 
        direction={{ base: 'column', lg: 'row' }}
      >
      </Flex>
      {!!projects?.length ? (
        <>
          <Heading mb={4}>My projects</Heading>
          {projects}
          <Accordion allowToggle mt={4}>
            <AccordionItem>
              <h2>
                <AccordionButton 
                  _hover={{ bg: 'brand.mainWithOpacity' }}
                >
                  <Box 
                    as="span" 
                    flex='1' 
                    textAlign='left'
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.text"
                  >
                    Have you integrated with the widgets yet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <IntegrationSteps projectId={data.projects[0]} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        noProject
      )}
    </>
  );
};

export default Dashboard;
