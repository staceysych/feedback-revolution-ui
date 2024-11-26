import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import { DASHBOARD } from "@/app/utils";

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
        <Tab>
          <Link href={`${DASHBOARD}/${projectId}/reviews`}>Reviews</Link>
        </Tab>
        <Tab>
          <Link href={`${DASHBOARD}/${projectId}/ideas`}>Ideas</Link>
        </Tab>
        <Tab>
          <Link href={`${DASHBOARD}/${projectId}/issues`}>Issues</Link>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DashboardTabs;
