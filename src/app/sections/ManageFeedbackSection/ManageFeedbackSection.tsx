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

import ReviewsGif from "@/app/assets/Reviews.gif";
import IdeasIcon from "@/app/assets/Ideas.gif";
import IssuesIcon from "@/app/assets/Issues.gif";

enum Section {
  Reviews = "Reviews",
  Ideas = "Ideas",
  Issues = "Issues",
}

const sections = [
  {
    section: Section.Reviews,
    icon: ReviewsGif,
  },
  {
    section: Section.Ideas,
    icon: IdeasIcon,
  },
  {
    section: Section.Issues,
    icon: IssuesIcon,
  },
];

const getIconBySection = (section: Section) => {
  return sections.find((item) => item.section === section)?.icon;
};

const ManageFeedbackSection = () => {
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
              Manage customer feedback efficiently in a centralised feedback
              dashboard
            </Heading>
            <Text size={"2xl"} textAlign={{ base: "center", lg: "left" }}>
              Our customer feedback platform consolidates all reviews, ideas,
              and issues from your users into a single, easy-to-navigate
              interface for streamlined feedback management.
            </Text>
            <Flex
              gap={{ base: 2, md: 8 }}
              justifyContent={{ base: "center", lg: "flex-start" }}
              flexDir={{ base: "column", md: "row" }}
              width={{ base: "50%", md: "100%" }}
              margin={{ base: "0 auto", md: "unset" }}
            >
              {sections.map(({ section }) => (
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
                  <Text color={"inherit"}>Show {section}</Text>
                </Button>
              ))}
            </Flex>
          </Stack>
          <Box 
            flex={1} 
            boxShadow="0 8px 30px rgba(0, 0, 0, 0.15)"
            borderRadius={10}
          >
            <Image
              src={getIconBySection(selectedSection) || ""}
              alt={`${selectedSection} icon`}
              priority={true}
              style={{
                borderRadius: 10,
                clipPath: "inset(2px 0)",
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ManageFeedbackSection;
