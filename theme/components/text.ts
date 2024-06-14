import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

// Defining a custom variant
const h1Variant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    fontWeight: "800",
    color: "black.900",
    fontSize: [24, 32, 40],
  };
});
const h2Variant = defineStyle((props) => {
  return {
    fontWeight: "semibold",
    color: "black.900",
    fontSize: ["20px", "28px"],
  };
});

// Defining a custom variant
const p1Variant = defineStyle((props) => {
  return {
    fontWeight: "400",
    color: "black.900",
    fontSize: ["12px", "16px"],
  };
});
const pageLinkVariant = defineStyle(() => {
  return {
    fontWeight: "500",
    color: "secondary.600",
    fontSize: "16px",
    backgroundColor: "transparent",
    _hover: {
      textDecoration: "none",
      backgroundColor: "rgb(240, 240, 253)",
      borderRadius: 2,
    },
  };
});

export const textTheme = defineStyleConfig({
  variants: {
    h1: h1Variant,
    h2: h2Variant,
    p1: p1Variant,
    pageLink: pageLinkVariant,
  },
  defaultProps: {},
});
