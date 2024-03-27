import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
    fontSize: 12,
  },
  variants: {
    "default-main": {
      bgColor: "main.dark",
      textColor: "white",
      h: "fit-content",
      px: 3,
      py: 1,
      _hover: {
        bgColor: "main.default",
        textColor: "accent.default",
      },
    },
    "grey-button": {
      bgColor: "neutral.default",
      textColor: "text.dark",
      h: "fit-content",
      px: 3,
      py: 1,
      _hover: {
        bgColor: "main.default",
        textColor: "white",
      },
    },
    transparent: {
      bgColor: "transparent",
      textColor: "black",
      h: "fit-content",
      px: 3,
      py: 1,
      _hover: {
        bgColor: "main.default",
        textColor: "white",
      },
    },
    "transparent-bg-light": {
      bgColor: "transparent",
      textColor: "black",
      h: "fit-content",
      px: 3,
      py: 1,
      _hover: {
        bgColor: "main.default",
        textColor: "white",
      },
    },
    // ... add more variants
  },
  defaultProps: {
    variant: "default-main",
  },
});
