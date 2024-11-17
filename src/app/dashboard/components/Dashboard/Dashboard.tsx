"use client";

import { Tier } from "@/app/types/user";
import { PROJECT_API, USER_API } from "@/app/utils";
import { Button, Heading, Stack, useToast } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const toast = useToast();
  const handleCreateProject = async () => {
    try {
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
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(USER_API);
      const data = await response.json();
      const isTestTier = data?.tier === Tier.Test;

      setShowCreateProject(isTestTier);
    };

    fetchUser();
  }, []);

  return (
    <Stack minH={"100vh"} pt={10}>
      <Heading>You have no project yet</Heading>
      {showCreateProject && (
        <Button w={60} onClick={handleCreateProject}>
          Create a project
        </Button>
      )}
    </Stack>
  );
};

export default Dashboard;
