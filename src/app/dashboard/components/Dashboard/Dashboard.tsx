"use client";

import { Tier } from "@/app/types/user";
import { PROJECT_API, USER_API } from "@/app/utils";
import { fetcher } from "@/app/utils/fetcher";
import {
  Button,
  CircularProgress,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import useSWR from "swr";

import ProjectCard from "@/app/dashboard/components/ProjectCard";
import UserCard from "@/app/dashboard/components/UserCard";
import TierDisclaimer from "@/app/dashboard/components/TierDisclamer";

const Dashboard = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const { data, isLoading } = useSWR(USER_API, fetcher);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const handleCreateProject = async () => {
    try {
      setLoading(true);
      const response = await fetch(PROJECT_API, {
        method: "POST",
      });

      if (response.status === 201) {
        toast({
          title: "Project created successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error: any) {
      throw new Error("Project creation failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data?.tier === Tier.Test) {
      setShowCreateProject(true);
    }
  }, [data]);

  const projects = data?.projects.map((projectId: string, index: number) => (
    <ProjectCard
      key={projectId}
      name={`Project ${index + 1}`}
      projectId={projectId}
    />
  ));

  const noProject = (
    <>
      <Heading>You have no project yet</Heading>
      {showCreateProject && (
        <Button w={60} onClick={handleCreateProject} isLoading={loading}>
          Create a project
        </Button>
      )}
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
        {data && <UserCard user={data} />}
        {data && <TierDisclaimer tier={data.tier} />}
      </Flex>
      {!!projects?.length ? (
        <>
          <Heading mb={4}>My projects</Heading>
          {projects}
        </>
      ) : (
        noProject
      )}
    </>
  );
};

export default Dashboard;
