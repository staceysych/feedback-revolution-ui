"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { LoaderProvider } from "@/app/providers/LoaderProvider";
import theme from "@/app/styles/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <LoaderProvider>{children}</LoaderProvider>
    </ChakraProvider>
  );
};

export default Providers;
