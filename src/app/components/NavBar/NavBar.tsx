import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          bg={"inherit"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justifyContent={"space-between"}
        >
          <Flex align={"center"} gap={2}>
            <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
            <Text fontSize={"xl"} fontWeight={"bold"} lineHeight={6}>
              Feedback <br />
              Evolution
            </Text>
          </Flex>
          <Link href="/docs" passHref>
            <Text 
              cursor="pointer" 
              _hover={{ textDecoration: 'underline' }}
            >
              Get Started
            </Text>
          </Link>
          <Button>
            <Link href="/sign-in" passHref>
              Log in
            </Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
