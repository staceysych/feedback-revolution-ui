"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";

import { AiOutlineStar, AiOutlineBulb, AiOutlineWarning } from "react-icons/ai";

import ReviewsIcon from "@/app/assets/reviews.png";
import IdeasIcon from "@/app/assets/ideas.png";
import IssuesIcon from "@/app/assets/issues.png";

enum Section {
  Reviews = "Reviews",
  Ideas = "Ideas",
  Issues = "Issues",
}

const sections = [
  {
    section: Section.Reviews,
    icon: ReviewsIcon,
    miniIcon: <AiOutlineStar size={24} />,
  },
  {
    section: Section.Ideas,
    icon: IdeasIcon,
    miniIcon: <AiOutlineBulb size={24} />,
  },
  {
    section: Section.Issues,
    icon: IssuesIcon,
    miniIcon: <AiOutlineWarning size={24} />,
  },
];

const getIconBySection = (section: Section) => {
  return sections.find((item) => item.section === section)?.icon;
};

const ManageFeedback = () => {
  const [selectedSection, setSelectedSection] = useState(Section.Reviews);

  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align={"flex-start"}
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
              Manage feedback in a centralized dashboard.
            </Heading>
            <Text
              size={"2xl"}
              fontWeight={"bold"}
              textAlign={{ base: "center", lg: "left" }}
            >
              Our intuitive platform consolidates all reviews, ideas, and issues
              from your users into a single, easy-to-navigate interface.
            </Text>
            <Flex
              gap={{ base: 2, md: 8 }}
              justifyContent={{ base: "center", lg: "flex-start" }}
              flexDir={{ base: "column", md: "row" }}
              width={{ base: "50%", md: "100%" }}
              margin={{ base: "0 auto", md: "unset" }}
            >
              {sections.map(({ section, miniIcon }) => (
                <Button
                  key={section}
                  variant={selectedSection === section ? "solid" : "outline"}
                  onClick={() => setSelectedSection(section)}
                  flex={1}
                  minH={10}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {miniIcon}
                  Show {section}
                </Button>
              ))}
            </Flex>
          </Stack>
          <Box flex={1}>
            <Image
              src={getIconBySection(selectedSection) || ""}
              alt="Reviews icon"
              priority={true}
              style={{
                borderRadius: 10,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ManageFeedback;
