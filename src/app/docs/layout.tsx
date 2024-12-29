import { Container, Stack } from "@chakra-ui/react";
import NavBar from "@/app/components/NavBar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Stack minH={"100vh"} pt={10}>
          {children}
        </Stack>
      </Container>
    </>
  );
};

export default DocsLayout; 