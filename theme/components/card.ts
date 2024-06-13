import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    backgroundColor: "base.80",
    // _dark: {
    //   backgroundColor: "base.800",
    // },
    borderColor: "grey.50",
    borderWidth: "1px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "500",
    paddingBottom: "2px",
  },
  body: {
    paddingTop: "2px",
  },
  footer: {
    paddingTop: "4px",
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: "0",
    },
  }),
  // define custom styles for xl size
  xl: definePartsStyle({
    container: {
      borderRadius: "12px",
      padding: "26px",
    },
  }),
};

// define custom variant
const variants = {
  greyCard: definePartsStyle({
    container: {
      backgroundColor: "base.80",
    },
  }),
  glassCard: definePartsStyle({
    container: {
      backgroundColor: "base.15",
    },
  }),
};

// export the component theme
export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    // define which size and variant is applied by default
    size: "xl",
    variant: "greyCard",
  },
});
