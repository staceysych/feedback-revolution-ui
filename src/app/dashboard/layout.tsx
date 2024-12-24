import { Container, Stack } from "@chakra-ui/react";
import DashboardNavBar from "./components/DashboardNavBar";
import { auth } from "@/auth";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <>
      <DashboardNavBar session={session} />
      <Container>
        <Stack minH={"100vh"} pt={10}>
          {children}
        </Stack>
      </Container>
    </>
  );
};

export default DashboardLayout;
