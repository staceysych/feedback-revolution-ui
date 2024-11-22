import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";

import Logout from "@/app/dashboard/components/Logout";
import Link from "next/link";
import { auth } from "@/auth";

const DashboardNavBar = async () => {
  const session = await auth();

  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          bg={"inherit"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justifyContent={"space-between"}
        >
          <Flex align={"center"} gap={2}>
            <Link href={"/"}>
              <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
            </Link>
            <Text fontSize={"xl"} fontWeight={"bold"} lineHeight={6}>
              Feedback <br />
              Evolution
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Box
              display={{ base: "none", sm: "flex" }}
              alignItems={"center"}
              gap={2}
            >
              <Text>
                {session?.user?.name ? session.user.name : session?.user?.email}
              </Text>

              {session?.user?.image && (
                <Image
                  src={session?.user.image || ""}
                  alt={session?.user.name || ""}
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                />
              )}
            </Box>

            <Logout />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default DashboardNavBar;
