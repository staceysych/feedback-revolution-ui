import { Box, Container, Link, Flex, Text, Divider } from "@chakra-ui/react";
import { AiOutlineX } from "react-icons/ai";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          align={"center"}
          justify={"center"}
          gap={2}
          flexDir={{ base: "column", md: "row" }}
          py={8}
        >
          <Text textAlign={"center"}>
            © 2024 Feedback Evolution. All rights reserved.
          </Text>
          <Divider
            orientation="vertical"
            borderColor={"brand.text"}
            height={8}
            display={{ base: "none", md: "block" }}
          />
          <NextLink href="/privacy-policy" passHref>
            <Text
              as="span"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </Text>
          </NextLink>
          <Divider
            orientation="vertical"
            borderColor={"brand.text"}
            height={8}
            display={{ base: "none", md: "block" }}
          />
          <NextLink href="/terms-of-service" passHref>
            <Text
              as="span"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Terms of Service
            </Text>
          </NextLink>
          <Divider
            orientation="vertical"
            borderColor={"brand.text"}
            height={8}
            display={{ base: "none", md: "block" }}
          />
          <Link
            href="https://x.com/dev_blondie"
            isExternal
            display={"inline"}
            color={"brand.text"}
            _hover={{ color: "brand.textHover" }}
          >
            <AiOutlineX size={24} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
