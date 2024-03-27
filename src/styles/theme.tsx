import { extendTheme, theme as base } from "@chakra-ui/react";
import { Button } from "./Button";

const customTheme = {
  colors: {
    primary: {
      default: "#95263A", // V3
    },
    accent: {
      default: "#E0BB20",
    },
    neutral: {
      default: "#EFEFEF",
      "01": "#FCFCFC",
      "02": "#F4F4F4",
      "03": "#EFEFEF",
      "04": "#6F767E",
      "07": "#1A1D1F",
    },
    // ESPBT
    main: {
      light: "#527BD2", // Lighter
      default: "#95263A", // Default - V3
      dark: "#681B29",
      active: "#E0BB20", // V3
    },
    input: {
      background: "#F4FBFA",
    },
    text: {
      hover: { "01": "#FFC836" },
      grey: {
        "01": "#5B5B5B",
      },
      dark: "#1A1D1F",
      "dark.01": "#1D1D1D",
      blue: "#407BFF",
      red: "#E31F21",
    },
    sidebar: {
      color: {
        main: "#E0BB20",
      },
      bg: {
        default: "#1D1D1D",
        number: "white",
        "number.active": "#E0BB20",
        transparent: "transparent",
        active: "#681B29",
        "active-child": "#527BD2",
        hover: "#3D3D3D",
      },
      text: {
        default: "white",
        number: "#1A1D1F",
        "number.active": "#1A1D1F",
        active: "#E0BB20",
        hover: "white",
      },
    },
    footer: {
      bg: {
        default: "#681B29",
      },
    },
    status: {
      green: "#009446",
      red: "#E31F21",
      yellow: "#FFC836",
      blue: "#407BFF",
      gray: "#858585",
      "gray.text": "white",
      "green.text": "white",
      "red.text": "white",
      "yellow.text": "black",
      "blue.text": "white",
    },
  },

  fonts: {
    heading: `'Exo 2', ${base.fonts?.heading}`,
    body: `'Poppins', ${base.fonts?.body}`,
  },

  breakpoints: {
    base: "0px",
    xs: "290px",
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },

  components: {
    // Menu,
    Button,
    //   Checkbox,
    //   FormControl,
    //   FormLabel,
    //   Input,
    //   Link,
    //   Radio,
    //   Select,
    //   Divider,
    //   Text,
  },
};

export const theme = extendTheme(customTheme);
