"use client";

import {
  Card,
  CardBody,
  Flex,
  List,
  Text,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";
import { ISSUES_API } from "@/app/utils";
import IssueListItem from "../IssueListItem/IssueListItem";
import { IssuesFilters } from "../Filters";
import { useMemo, useState } from "react";
import InfoTooltip from "@/app/components/InfoTooltip";
import ListHeader from "@/app/dashboard/components/ListHeader";
import { Issue } from "@/app/types/common";

  
  const columns = [
    "",
    "user",
    "issue",
    "severity",
    "date",
    "status",
    "actions",
  ];

const IssuesList = ({ projectId }: { projectId: string }) => {
  const { data, isLoading } = useSWR(`${ISSUES_API}/${projectId}`, fetcher);
  const issues = data?.data || [];

  const [selectedSeverities, setSelectedSeverities] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredIssues = useMemo(() => {
    return issues.filter((issue: any) => {
      const matchesSeverity =
        !selectedSeverities.length ||
        selectedSeverities.includes(issue.severity);
      const matchesStatus =
        !selectedStatuses.length || selectedStatuses.includes(issue.status);
      return matchesSeverity && matchesStatus;
    });
  }, [issues, selectedSeverities, selectedStatuses]);

  const stats = useMemo(() => {
    const total = issues.length;
    const resolved = issues.filter((issue: any) => issue.status === "Resolved").length;
    const open = total - resolved;

    return { total, resolved, open };
  }, [issues]);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <>
      <Flex 
        mb={4} 
        gap={4}
        direction={{ base: "column", md: "row" }}
        align={{ base: "stretch", md: "flex-start" }}
        height={{ md: "auto" }}
        flexWrap={{ md: "wrap" }}
      >
        <Card 
          minW={{ base: "100%", md: "calc(50% - 8px)", lg: "200px" }}
          height={{ md: "200px" }}
          border="1px solid" 
          borderColor="gray.100" 
          boxShadow="md"
        >
          <CardBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Text fontWeight="bold" textAlign="center">
              Total Issues
            </Text>
            <Text 
              fontSize={{ base: "4xl", md: "6xl" }} 
              fontWeight="bold" 
              textAlign="center"
            >
              {stats.total}
            </Text>
          </CardBody>
        </Card>

        <Card 
          minW={{ base: "100%", md: "calc(50% - 8px)", lg: "400px" }}
          height={{ md: "200px" }}
          border="1px solid" 
          borderColor="gray.100" 
          boxShadow="md"
        >
          <CardBody>
            <Flex 
              direction="row" 
              justify="space-between"
              height="100%"
            >
              <Box flex="1" bg="red.50" p={4} borderRadius="md">
                <Text fontWeight="bold" textAlign="center">
                  Open Issues
                </Text>
                <Text 
                  fontSize={{ base: "4xl", md: "6xl" }} 
                  fontWeight="bold" 
                  textAlign="center"
                >
                  {stats.open}
                </Text>
              </Box>
              <Box width="1px" bg="gray.200" mx={4} />
              <Box flex="1" bg="green.50" p={4} borderRadius="md">
                <Text fontWeight="bold" textAlign="center">
                  Resolved Issues
                </Text>
                <Text 
                  fontSize={{ base: "4xl", md: "6xl" }} 
                  fontWeight="bold" 
                  textAlign="center"
                >
                  {stats.resolved}
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>

        <IssuesFilters
          onSeverityChange={setSelectedSeverities}
          onStatusChange={setSelectedStatuses}
        />
      </Flex>

      {!!filteredIssues.length ? (
        <>
          <Box overflowX={{ base: "auto", md: "visible" }} width="100%">
            <Box minWidth={{ base: "800px", md: "100%" }}>
              <ListHeader
                columns={columns}
                templateColumns="32px 50px 1fr 60px 80px 70px 150px 32px"
              />
              <List
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                boxShadow="md"
              >
                {filteredIssues.map((issue: Issue) => (
                  <IssueListItem key={issue._id} issue={issue} projectId={projectId} />
                ))}
              </List>
            </Box>
          </Box>
        </>
      ) : (
        <Text>No issues.</Text>
      )}
    </>
  );
};

export default IssuesList; 