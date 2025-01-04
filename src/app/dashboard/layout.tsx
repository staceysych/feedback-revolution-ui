import { Container, Stack } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <>
      <Container>
        <Stack minH={"100vh"} pt={10}>
          {children}
        </Stack>
      </Container>
    </>
  );
};

export default DashboardLayout;
