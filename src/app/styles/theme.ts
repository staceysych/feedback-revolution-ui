import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      pink: "#F7DDDD",
      text: "#251055",
      textHover: "#8E84A3",
      main: "#8257E5",
      grey: "#A1A1AA",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Text: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Container: {
      baseStyle: {
        maxW: "8xl",
      },
    },
    Button: {
      variants: {
        solid: {
          bg: "brand.main",
          color: "white",
          _hover: {
            bg: "brand.text",
          },
        },
      },
    },
  },
});

export default theme;
