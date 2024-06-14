import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    rounded: "full",
  },
  label: {
    fontWeight: "500",
    color: "black.900",
    fontSize: "16px",
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
});
