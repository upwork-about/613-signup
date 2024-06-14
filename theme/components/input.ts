import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 1,
      cursor: "not-allowed",
      color: "base.100",
    },
    _placeholder: {
      color: "base.100",
    },
  },
});

const variantFilled = definePartsStyle(() => {
  return {
    field: {
      fontWeight: "semibold", // change font weight to semibold
      bg: "secondary.500",
      _placeholder: {
        color: "secondary.900",
      },
      _hover: {
        borderColor: "brand.200",
      },

      _focusVisible: {
        borderColor: "brand.200",
      },
    },
  };
});

const variants = {
  filled: variantFilled,
};

const sizes = {
  xl: definePartsStyle({
    field: {
      fontSize: ["md", "lg"],
      px: "4",
      h: [10, 12, 14],
      borderRadius: "8px",
    },
  }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "xl",
    variant: "filled",
  },
});
