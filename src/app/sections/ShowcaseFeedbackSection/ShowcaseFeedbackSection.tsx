"use client";
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


import {
  ReviewCardsSlider,
  ProgressCardsSlider,
} from "feedback-evolution-widget-react";

const ideasDescription = [
  "Engage customers by showcasing ongoing ideas and allowing them to upvote their favorites.",
  "Give your users a voice to foster a community-driven product evolution that meets their needs and keeps them engaged.",
];

const reviewsDescription = [
  "Showcase top customer testimonials by easily adding their reviews directly to your website.",
  "Our platform lets you select and highlight the best feedback with just a few clicks, enhancing your brand's trust and credibility.",
];

const ShowcaseFeedbackSection = () => {
  return (
    <Container>
      <Flex
        direction={{ base: "column-reverse", xl: "row" }}
        align={{ base: "center", xl: "flex-start" }}
        justify={"center"}
        py={12}
        gap={16}
      >
        <Box flex={1}>
          <ReviewCardsSlider
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
            sliderWidth={700}
          />
        </Box>
        <Stack gap={6} pt={5} flex={1}>
          <Heading
            as={"h2"}
            size={"xl"}
            textAlign={{ base: "center", xl: "left" }}
          >
            Showcase your customers reviews
          </Heading>
          {reviewsDescription.map((description) => (
            <Text key={description} textAlign={{ base: "center", xl: "left" }}>
              {description}
            </Text>
          ))}
        </Stack>
      </Flex>
      <Divider width={"50%"} borderColor={"brand.text"} m={"0 auto"} />
      <Flex
        direction={{ base: "column", xl: "row" }}
        align={{ base: "center", xl: "flex-start" }}
        justify={"center"}
        py={12}
        gap={16}
      >
        <Stack gap={6} flex={1}>
          <Heading
            as={"h2"}
            size={"xl"}
            textAlign={{ base: "center", xl: "left" }}
          >
            Turn customer ideas into new features
          </Heading>
          {ideasDescription.map((description) => (
            <Text
              key={description}
              size={"2xl"}
              textAlign={{ base: "center", xl: "left" }}
            >
              {description}
            </Text>
          ))}
        </Stack>
        <Box flex={1} display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Heading
            as={"h2"}
            size={"lg"}
            textAlign={{ base: "center", xl: "left" }}
          >
            Bringing your ideas to life
          </Heading>
          <ProgressCardsSlider
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
            sliderWidth={760}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default ShowcaseFeedbackSection;
