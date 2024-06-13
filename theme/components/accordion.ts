import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({});

// Defining a custom variant called outline
const custom = definePartsStyle(() => {
  return {
    container: {
      border: "none",
    },
    panel: defineStyle({
      px: 0,
    }),
    button: {
      borderRadius: "12px",
      "&[aria-expanded=true]": {
        bg: "brand.300",
        color: "#fff",
      },
    },
  };
});

const variants = {
  custom,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    // size: 'md',
    variant: "custom",
  },
});
