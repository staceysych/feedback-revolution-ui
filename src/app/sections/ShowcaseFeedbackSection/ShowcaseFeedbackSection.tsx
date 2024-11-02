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

import IdeasDisplayIcon from "@/app/assets/ideas-display.png";
import ReviewsDisplayIcon from "@/app/assets/reviews-display.png";

const ideasDescription = [
  "Engage customers by showcasing ongoing ideas and allowing them to upvote their favorites.",
  "Give your users a voice to foster a community-driven product evolution that meets their needs and keeps them engaged.",
];

const reviewsDescription = [
  "Showcase top customer testimonials by easily adding their reviews directly to your website.",
  "Our platform lets you select and highlight the best feedback with just a few clicks, enhancing your brand's trust and credibility.",
];

const reviewsImg = (
  <Image
    src={ReviewsDisplayIcon}
    alt="Reviews display icon"
    priority={true}
    style={{
      borderRadius: 10,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  />
);
const ShowcaseFeedbackSection = () => {
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        justify={"center"}
        py={12}
        gap={16}
      >
        <Box flex={1} display={{ base: "none", lg: "block" }}>
          {reviewsImg}
        </Box>
        <Stack gap={6} pt={5} flex={1}>
          <Heading
            as={"h2"}
            size={"xl"}
            textAlign={{ base: "center", lg: "left" }}
          >
            Showcase your customers reviews
          </Heading>
          {reviewsDescription.map((description) => (
            <Text key={description} textAlign={{ base: "center", lg: "left" }}>
              {description}
            </Text>
          ))}
        </Stack>
        <Box flex={1} display={{ base: "block", lg: "none" }}>
          {reviewsImg}
        </Box>
      </Flex>
      <Divider width={"50%"} borderColor={"brand.text"} m={"0 auto"} />
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        justify={"center"}
        py={12}
        gap={16}
      >
        <Stack gap={6} pt={5} flex={1}>
          <Heading
            as={"h2"}
            size={"xl"}
            textAlign={{ base: "center", lg: "left" }}
          >
            Turn customer ideas into new features
          </Heading>
          {ideasDescription.map((description) => (
            <Text
              key={description}
              size={"2xl"}
              textAlign={{ base: "center", lg: "left" }}
            >
              {description}
            </Text>
          ))}
        </Stack>
        <Box flex={1}>
          <Image
            src={IdeasDisplayIcon}
            alt="Ideas display icon"
            priority={true}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default ShowcaseFeedbackSection;
