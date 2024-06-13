import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "8px", // disable the border radius
  fontWeight: "500", // change the font weight to normal
  width: "100%",
  color: "white",
});

const sizes = {
  md: defineStyle({
    fontSize: "md", // Change font size to sm (14px)
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
});
