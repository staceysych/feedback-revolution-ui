import { Container, Stack } from "@chakra-ui/react";
import NavBar from "@/app/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Feedback Evolution",
  description: "Learn how to integrate and use Feedback Evolution widgets in your application. Step-by-step guides, component documentation, and FAQs.",
  keywords: "feedback widget, user feedback, customer reviews, documentation",
  openGraph: {
    title: "Documentation | Feedback Evolution",
    description: "Learn how to integrate and use Feedback Evolution widgets in your application.",
    type: "website",
  },
};

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <Container>
        <Stack minH={"100vh"} pt={10}>
          {children}
        </Stack>
      </Container>
  );
};

export default DocsLayout; 