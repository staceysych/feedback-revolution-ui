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
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "flex-start" }}
          justify={"space-between"}
          py={12}
          gap={8}
        >
          <Image src={HeroSectionIcon} alt="Hero icon" priority={true} />
          <Stack gap={6} pt={5}>
            <Heading
              as={"h1"}
              size={"2xl"}
              textAlign={{ base: "center", lg: "left" }}
              lineHeight={"56px"}
            >
              Collect, Manage, and Showcase Your Feedback
            </Heading>
            <Text
              size={"2xl"}
              fontWeight={"bold"}
              textAlign={{ base: "center", lg: "left" }}
            >
              Capture reviews, organize ideas, address issues, and highlight top
              feedback — <br /> all from one powerful dashboard.
            </Text>
            <Stack gap={1} margin={{ base: "0 auto", lg: "unset" }}>
              {advantages.map((advantage, index) => (
                <Flex key={index} align={"center"} gap={2}>
                  <AiOutlineCheck size={24} color="green" />
                  <Text fontWeight={"bold"}>{advantage}</Text>
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          pb={12}
          pt={{ base: 4, md: 6 }}
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
                width={300}
                {...register("email", {
                  required: true,
                })}
              />
              <Button type="submit" isLoading={loading}>
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
              Be the first to experience our platform and get access to special
              early-bird pricing available only to waitlist members.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
