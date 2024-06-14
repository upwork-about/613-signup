import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "8px", // disable the border radius
  fontWeight: "500", // change the font weight to normal
  width: "100%",
  color: "white",
  height: "56px",
});

const sizes = {
  xl: defineStyle({
    fontWeight: "700",
    px: "6",
    fontSize: ["md", "lg", "xl"],
    h: [10, 12, 14],
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
});
