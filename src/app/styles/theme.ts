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
      mainWithOpacity: "rgba(130, 87, 229, 0.1)",
      grey: "#A1A1AA",
      error: "#FFA3A5",
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
        outline: {
          color: "brand.main",
          border: "1px solid",
          borderColor: "brand.main",
          _hover: {
            bg: "brand.mainWithOpacity",
          },
        },
      },
    },
  },
});

export default theme;
