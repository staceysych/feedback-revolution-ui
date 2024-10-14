import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AnimatedNumber from "@/app/components/AnimatedNumber";
import Image from "next/image";
import MiniLogo from "@/app/assets/miniLogo.svg";
import {
  highlightText,
  START_UPS_STRUGGLES,
  PRODUCT_BENEFITS,
} from "@/app/utils";

const FeaturesSection = () => {
  return (
    <Container>
      <Stack py={12} spacing={12}>
        <Heading as="h2" size="xl" textAlign="center">
          How Feedback Revolution can help?
        </Heading>
        <Flex justifyContent={"center"} gap={12}>
          <Box w={500}>
            <Grid
              templateRows="1fr 1fr"
              templateColumns="1fr 1fr"
              gap={0}
              width="100%"
              height="100%"
              border={"1px solid"}
              borderColor={"brand.grey"}
              borderRadius={10}
            >
              {START_UPS_STRUGGLES.map((item, index) => (
                <Box
                  key={index}
                  p={6}
                  borderRight={index % 2 !== 0 ? "none" : "1px solid"}
                  borderBottom={index >= 2 ? "none" : "1px solid"}
                  borderColor="brand.grey"
                >
                  <Stack spacing={2} alignItems={"center"}>
                    <Heading as="h3" size="xl">
                      <AnimatedNumber value={item.title} />%
                    </Heading>
                    <Text textAlign={"center"} fontWeight={"bold"}>
                      {highlightText({
                        text: item.description,
                        color: "brand.error",
                      })}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </Grid>
            <Text fontSize={"xs"} mt={2} color={"brand.grey"}>
              *This information was written with the help of OpenAI and may not
              reflect real-time accuracy.
            </Text>
          </Box>
          <Box
            w={500}
            border={"1px solid"}
            borderColor={"brand.grey"}
            borderRadius={10}
            p={4}
          >
            <Stack alignItems={"center"} gap={8}>
              <Flex alignItems={"center"} gap={2}>
                <Image src={MiniLogo} alt="logo icon" priority={true} />
                <Heading as={"h3"} size={"md"}>
                  Feedback Revolution
                </Heading>
              </Flex>
              <Stack spacing={6}>
                {PRODUCT_BENEFITS.map((item) => (
                  <Flex key={item.description} gap={4} alignItems={"center"}>
                    <Box bg={"brand.main"} p={2} borderRadius={"50%"}>
                      {item.icon}
                    </Box>
                    <Text fontWeight={"bold"}>{item.description}</Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default FeaturesSection;
