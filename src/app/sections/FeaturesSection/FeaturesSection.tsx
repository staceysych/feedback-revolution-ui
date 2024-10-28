import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import UnderlineIcon from "@/app/assets/underline.png";
import { PRODUCT_BENEFITS } from "@/app/utils";
import { base } from "framer-motion/client";

const FeaturesSection = () => {
  return (
    <Container>
      <Stack py={12} align={"center"}>
        <Flex flexDir={{ base: "column", md: "row" }} align={"center"} gap={2}>
          <Heading as="h3" size="xl">
            99%
          </Heading>
          <Text fontSize={"lg"} textAlign={"center"}>
            of startups fail within their first year.
          </Text>
        </Flex>
        <Image
          src={UnderlineIcon}
          alt="UnderlineIcon icon"
          priority={true}
          width={400}
        />

        <Heading as="h2" size="lg" textAlign="center">
          How can Feedback Evolution help you <br /> be among the 1% of
          successful businesses?
        </Heading>

        <Box
          w={{ base: "100%", md: 500 }}
          border={"1px solid"}
          borderColor={"brand.grey"}
          borderRadius={10}
          p={{ base: 4, md: 6 }}
          mt={8}
        >
          <Stack alignItems={"center"} gap={6}>
            <Flex alignItems={"center"} gap={2}>
              <Image src={Logo} alt="logo icon" priority={true} width={40} />
              <Heading as={"h3"} size={"md"}>
                Feedback Evolution
              </Heading>
            </Flex>
            <Stack spacing={6}>
              {PRODUCT_BENEFITS.map((item, index, array) => (
                <React.Fragment key={item.description}>
                  <Flex
                    gap={4}
                    alignItems={"center"}
                    justifyContent={{ base: "center", md: "flex-start" }}
                  >
                    <Box
                      bg={"brand.main"}
                      p={2}
                      borderRadius={"50%"}
                      display={{ base: "none", md: "block" }}
                    >
                      {item.icon}
                    </Box>
                    <Text
                      fontWeight={"bold"}
                      textAlign={{ base: "center", md: "left" }}
                    >
                      {item.description}
                    </Text>
                  </Flex>
                  {index < array.length - 1 && (
                    <Divider display={{ base: "block", md: "none" }} />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default FeaturesSection;
