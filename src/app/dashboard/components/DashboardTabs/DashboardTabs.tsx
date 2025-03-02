import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import { DASHBOARD } from "@/app/utils";
import ReviewsList from "@/app/dashboard/components/ReviewsList";
import IdeasList from "@/app/dashboard/components/IdeasList";
import IssuesList from "@/app/dashboard/components/IssuesList";

const DashboardTabs = ({
  projectId,
  tabIndex,
}: {
  projectId: string;
  tabIndex: number;
}) => {
  return (
    <Tabs defaultIndex={tabIndex}>
      <TabList>
        <Tab
          _selected={{ color: "brand.text", borderColor: "brand.text" }}
          color="gray.400"
        >
          <Link href={`${DASHBOARD}/${projectId}/reviews`}>Reviews</Link>
        </Tab>
        <Tab
          _selected={{ color: "brand.text", borderColor: "brand.text" }}
          color="gray.400"
        >
          <Link href={`${DASHBOARD}/${projectId}/ideas`}>Ideas</Link>
        </Tab>
        <Tab
          _selected={{ color: "brand.text", borderColor: "brand.text" }}
          color="gray.400"
        >
          <Link href={`${DASHBOARD}/${projectId}/issues`}>Issues</Link>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ReviewsList projectId={projectId} />
        </TabPanel>
        <TabPanel>
          <IdeasList projectId={projectId} />
        </TabPanel>
        <TabPanel>
          <IssuesList projectId={projectId} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DashboardTabs;
