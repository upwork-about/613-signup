import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

// define the base component styles
const baseStyle = defineStyle({
  background: "rgba(134, 139, 255, 0.15)",
  p: "10px",
  my: "20px",
  w: "100%",
  borderRadius: "6px",
});

export const codeTheme = defineStyleConfig({
  baseStyle,
});
