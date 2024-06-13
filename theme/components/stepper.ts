import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

// define the base component styles
const baseStyle = defineStyle({
  indicator: {
    // change the default border radius to 0
    background: "brand.500",
    // opacity: 0.5,
    color: "white",
    border: "none",
  },
  number: {
    background: "brand.500",
    // opacity: 0.5,
    color: "white",
    border: "none",
  },
  icon: {
    background: "brand.500 !important",
    // opacity: 0.5,
    color: "white",
    border: "none",
  },
});

export const stepperTheme = defineStyleConfig({
  baseStyle,
});
