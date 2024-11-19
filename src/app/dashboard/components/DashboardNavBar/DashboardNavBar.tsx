"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";

import Logout from "@/app/dashboard/components/Logout";
import { User } from "next-auth";
import Link from "next/link";

interface DashboardNavBarProps {
  user: User | null;
}

const DashboardNavBar = ({ user }: DashboardNavBarProps) => {
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
              <Text>{user?.name ? user.name : user?.email}</Text>

              {user?.image && (
                <Image
                  src={user.image || ""}
                  alt={user.name || ""}
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
