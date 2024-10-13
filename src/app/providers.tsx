"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/app/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
