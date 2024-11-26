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
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";

import HeroSectionIcon from "@/app/assets/HeroSectionIcon.svg";

import Image from "next/image";
import { AiOutlineCheck, AiFillGift, AiOutlineUser } from "react-icons/ai";
import { useForm } from "react-hook-form";

import { useSubmitWaitListEmail } from "@/app/hooks/useSubmitWaitListEmail";
import NavBar from "@/app/components/NavBar";
import { WAITLIST_API } from "@/app/utils";

import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";

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
  const { data: waitListData, isLoading } = useSWR(WAITLIST_API, fetcher);

  const { onSubmit, loading } = useSubmitWaitListEmail(reset);

  return (
    <Box bg={"brand.pink"}>
      <NavBar />
      <Container>
        <Text fontWeight={"bold"} textAlign={"center"}>
          Launching in February 2025
        </Text>
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

        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          pb={12}
        >
          <Flex alignItems={"center"} mb={2}>
            {!isLoading ? (
              <>
                <AvatarGroup size="sm" spacing={"-6px"} max={2}>
                  {Array.from({ length: waitListData?.count - 1 }).map(
                    (_, index) => (
                      <Avatar
                        key={index}
                        bg="brand.main"
                        icon={<AiOutlineUser fontSize="1.5rem" />}
                      />
                    )
                  )}
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
                <Text pl={2}>people are already on the waitlist</Text>
              </>
            ) : (
              <Text>Loading waitlist data...</Text>
            )}
          </Flex>
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
