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
  "With our platform, you can gather, organize, and prioritise user suggestions effortlessly.",
  "Engage your customers by showcasing which ideas are in progress, and let them upvote their favourites.",
  "Give your users a voice and foster a community-driven product evolution that meets their needs and keeps them engaged.",
];

const reviewsDescription = [
  "Highlight the best feedback from your customers by seamlessly adding their reviews directly to your website.",
  "Our platform allows you to select and showcase top testimonials with just a few clicks, building trust and credibility for your brand.",
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
            Turn customer ideas into new features.
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
