import { Container, Stack } from "@chakra-ui/react";
import DashboardNavBar from "./components/DashboardNavBar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavBar />
      <Container>
        <Stack minH={"100vh"} pt={10}>
          {children}
        </Stack>
      </Container>
    </>
  );
};

export default DashboardLayout;
