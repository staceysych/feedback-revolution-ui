"use client";
import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Flex,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";

import HeroSectionIcon from "@/app/assets/HeroSectionIcon.svg";

import Image from "next/image";
import { AiOutlineCheck, AiFillGift } from "react-icons/ai";
import { useForm } from "react-hook-form";

import { useSubmitWaitListEmail } from "@/app/hooks/useSubmitWaitListEmail";
import NavBar from "@/app/components/NavBar";

const advantages = [
  "Build trust",
  "Improve your product",
  "Showcase the feedback",
];

interface IWaitListFormInput {
  email: string;
}

const HeroSection = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IWaitListFormInput>();

  const { onSubmit, loading } = useSubmitWaitListEmail(reset);

  return (
    <Box bg={"brand.pink"} minH={"100vh"}>
      <NavBar />
      <Container>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify={"space-between"}
          pt={16}
          pb={12}
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
              Collect, Manage, and Showcase Your Customers Feedback
            </Heading>
            <Text fontSize={"lg"} textAlign={{ base: "center", lg: "left" }}>
              Collect feedback with our easy-to-integrate{" "}
              <Text as={"span"} fontWeight={"bold"}>
                WIDGET
              </Text>{" "}
              on your website. Manage it all in a powerful{" "}
              <Text as={"span"} fontWeight={"bold"}>
                DASHBOARD
              </Text>
              . Showcase insights back to your users with our engaging{" "}
              <Text as={"span"} fontWeight={"bold"}>
                FEEDBACK CARDS
              </Text>
              .
            </Text>
          </Stack>
        </Flex>
        <Stack gap={1} margin="0 auto" width="fit-content">
          {advantages.map((advantage, index) => (
            <Flex key={index} align={"center"} gap={2}>
              <AiOutlineCheck size={24} color="green" />
              <Text fontSize={"lg"}>{advantage}</Text>
            </Flex>
          ))}
        </Stack>
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          py={12}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              isInvalid={!!errors.email}
              flexDir={{ base: "column", md: "row" }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                borderColor={"brand.text"}
                _hover={{ borderColor: "brand.textHover" }}
                color={"brand.text"}
                width={{ base: 300, md: 500 }}
                height="46px"
                {...register("email", {
                  required: true,
                })}
              />
              <Button type="submit" isLoading={loading} height={"46px"}>
                Join the waitist
              </Button>
            </FormControl>
          </form>
          <Flex
            alignItems={"center"}
            gap={2}
            flexDir={{ base: "column", md: "row" }}
          >
            <AiFillGift size={24} color="#8257E5" />
            <Text fontSize={"14px"} textAlign={{ base: "center", md: "left" }}>
              Be the first to experience our customer feedback management
              platform and unlock exclusive early-bird pricing available only to
              waitlist members.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
