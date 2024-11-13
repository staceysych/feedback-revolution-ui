import { auth } from "@/auth";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import Image from "next/image";

import Logout from "@/app/dashboard/components/Logout";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <Container>
      <Logout />
      <Stack>
        <Heading>Dashboard</Heading>
        <Text>
          {session.user.name ? session.user.name : session.user.email}
        </Text>
        {session.user.image && (
          <Image
            src={session.user.image || ""}
            alt={session.user.name || ""}
            width={72}
            height={72}
          />
        )}
      </Stack>
    </Container>
  );
};

export default Dashboard;
