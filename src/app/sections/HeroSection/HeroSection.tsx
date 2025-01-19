"use client";
import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

import HeroSectionIcon from "@/app/assets/HeroSectionIcon.svg";

import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";



const advantages = [
  "Improve your product",
  "Build trust",
  "Showcase the feedback",
];

const HeroSection = () => {
  return (
    <Box bg={"brand.pink"}>
      
      <Container>
        <Text fontWeight={"bold"} textAlign={"center"}>
          Launching in February 2025
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify={"space-between"}
          pt={16}
          pb={20}
          gap={8}
        >
          <Image
            src={HeroSectionIcon}
            alt="Feedback Evolution customer feedback management icon"
            priority={true}
          />
          <Stack gap={6} pt={5}>
            <Heading
              as={"h1"}
              size={"2xl"}
              textAlign={{ base: "center", lg: "left" }}
              lineHeight={"56px"}
            >
              Drive your startup success by listening & acting on users feedback
            </Heading>
            <Stack gap={1} width="fit-content" margin={{ base: "auto", lg: 0 }}>
              {advantages.map((advantage, index) => (
                <Flex key={index} align={"center"} gap={2}>
                  <AiOutlineCheck size={24} color="green" />
                  <Text fontSize={"lg"}>{advantage}</Text>
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
