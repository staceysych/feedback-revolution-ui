"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import { useDisclosure } from "@chakra-ui/react";
import SignInModal from "../SignInModal";
import { useState } from "react";
import SignUpModal from "../SignUpModal";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRegister, setIsRegister] = useState(false);

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Box bg={"brand.pink"}>
      <Container>
        <Flex
          bg={"inherit"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justifyContent={{ base: "center", lg: "space-between" }}
        >
          <Flex align={"center"} gap={2}>
            <Image src={Logo} alt="Feedback evolution Logo" priority={true} />
            <Text fontSize={"xl"} fontWeight={"bold"} lineHeight={6}>
              Feedback <br />
              Evolution
            </Text>
          </Flex>
          <Button onClick={onOpen}>Sign In</Button>
          {isRegister ? (
            <SignUpModal
              isOpen={isOpen}
              onClose={onClose}
              toggleRegister={toggleRegister}
            />
          ) : (
            <SignInModal
              isOpen={isOpen}
              onClose={onClose}
              toggleRegister={toggleRegister}
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
