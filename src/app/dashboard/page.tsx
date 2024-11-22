import { Container } from "@chakra-ui/react";

import DashboardNavBar from "@/app/dashboard/components/DashboardNavBar";

import Dashboard from "@/app/dashboard/components/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <DashboardNavBar />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
};

export default DashboardPage;
