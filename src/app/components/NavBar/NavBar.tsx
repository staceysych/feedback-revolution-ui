import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";

const NavBar = () => {
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          bg={"inherit"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justifyContent={{ base: "center", lg: "flex-start" }}
        >
          <Flex align={"center"} gap={2}>
            <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
            <Text fontSize={"xl"} fontWeight={"bold"} lineHeight={6}>
              Feedback <br />
              Evolution
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
