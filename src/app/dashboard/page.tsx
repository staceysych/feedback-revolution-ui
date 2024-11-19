import { Container } from "@chakra-ui/react";

import DashboardNavBar from "@/app/dashboard/components/DashboardNavBar";
import { auth } from "@/auth";
import Dashboard from "@/app/dashboard/components/Dashboard";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      <DashboardNavBar user={session?.user || null} />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
};

export default DashboardPage;
