'use client'

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardNavBar from "@/app/dashboard/components/DashboardNavBar/DashboardNavBar";

const NavBar = ({ session }: { session: any }) => {
  const pathname = usePathname();

  if (pathname.includes('dashboard')) {
    return <DashboardNavBar session={session} />
  }

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
            <Link href="/" passHref>
              <Flex align={"center"} gap={2}>
                <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
                <Text 
                  fontSize={"xl"} 
                  fontWeight={"bold"} 
                  lineHeight={6}
                  display={{ base: "none", md: "block" }}
                >
                  Feedback <br />
                  Evolution
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Link href="/docs" passHref>
            <Text 
              cursor="pointer" 
              _hover={{ textDecoration: 'underline' }}
            >
              Get Started
            </Text>
          </Link>
          <Button>
            <Link href={session ? "/dashboard" : "/sign-in"} passHref>
              {session ? "Dashboard" : "Log in"}
            </Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
