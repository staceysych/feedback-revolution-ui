import { auth } from "@/auth";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";

import DashboardNavBar from "@/app/dashboard/components/DashboardNavBar";

const Dashboard = async () => {
  const session = await auth();

  return (
    <>
      <DashboardNavBar user={session?.user || null} />
      <Container>
        <Stack minH={"100vh"} pt={10}>
          <Heading>You have no project yet</Heading>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
