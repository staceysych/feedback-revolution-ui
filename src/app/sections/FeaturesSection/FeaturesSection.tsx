import {
  Box,
  Container,
  Divider,
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
        <Flex
          justifyContent={"center"}
          gap={12}
          flexDir={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "flex-start" }}
        >
          <Box w={{ base: "100%", md: 500 }}>
            <Grid
              templateRows={{ base: "1fr 1fr 1fr 1fr", md: "1fr 1fr" }}
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={0}
              width="100%"
              height="100%"
              border={"1px solid"}
              borderColor={"brand.grey"}
              borderRadius={10}
            >
              {START_UPS_STRUGGLES.map((item, index, array) => (
                <Box
                  key={item.title}
                  p={{ base: 3, md: 6 }}
                  borderRight={{
                    base: "none",
                    md: index % 2 !== 0 ? "none" : "1px solid",
                  }}
                  borderBottom={{
                    base: index < array.length - 1 ? "1px solid" : "none",
                    md: index >= 2 ? "none" : "1px solid",
                  }}
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
            <Text
              fontSize={"xs"}
              mt={2}
              color={"brand.grey"}
              textAlign={{ base: "center", md: "left" }}
            >
              *This information was written with the help of OpenAI and may not
              reflect real-time accuracy.
            </Text>
          </Box>
          <Box
            w={{ base: "100%", md: 500 }}
            border={"1px solid"}
            borderColor={"brand.grey"}
            borderRadius={10}
            p={{ base: 4, md: 6 }}
          >
            <Stack alignItems={"center"} gap={8}>
              <Flex alignItems={"center"} gap={2}>
                <Image src={MiniLogo} alt="logo icon" priority={true} />
                <Heading as={"h3"} size={"md"}>
                  Feedback Revolution
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
        </Flex>
      </Stack>
    </Container>
  );
};

export default FeaturesSection;
