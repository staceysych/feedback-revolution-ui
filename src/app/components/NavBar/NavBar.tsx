import { Box, Container, Flex } from "@chakra-ui/react";
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
          <Image src={Logo} alt="Feedback revolution Logo" priority={true} />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
