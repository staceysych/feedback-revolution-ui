import { Box, CircularProgress, Container } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box>
      <Container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minH={"100vh"}
      >
        <CircularProgress isIndeterminate color="brand.text" />
      </Container>
    </Box>
  );
};

export default Loading;
