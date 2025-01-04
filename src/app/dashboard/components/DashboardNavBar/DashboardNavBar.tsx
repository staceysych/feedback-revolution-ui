'use client'
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import { FeedbackWidget } from "feedback-evolution-widget-react";

import Logout from "@/app/dashboard/components/Logout";
import Link from "next/link";

const DashboardNavBar = ({ session }: { session: any }) => {
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
          <Flex align={"center"} gap={6}>
            <Link href={"/"}>
              <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
            </Link>
            <Text 
              fontSize={"xl"} 
              fontWeight={"bold"} 
              lineHeight={6}
              display={{ base: "none", md: "block" }}
            >
              Feedback <br />
              Evolution
            </Text>
            <Link href="/docs" passHref>
              <Text 
                cursor="pointer" 
                _hover={{ textDecoration: 'underline' }}
              >
                Docs
              </Text>
            </Link>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <FeedbackWidget 
              projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ''}
              triggerComponent={<Text cursor={"pointer"}>Give us a feedback</Text>}
            />
            <Box as="span" h="24px" borderLeft="1px solid" borderColor={"brand.text"} />
            <Box
              display={{ base: "none", md: "flex" }}
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
