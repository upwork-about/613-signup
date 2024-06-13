import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "semibold", // change the font weight
  },
  // tabpanel: {
  //   fontFamily: 'mono', // change the font family
  // },
});

// define custom sizes
const sizes = {
  xl: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      // fontSize: '14px',
      py: "4",
      px: "6",
    },
    tabpanel: {
      py: "4",
      px: "6",
    },
  }),
};

const segmentedVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    root: {},
    tab: {
      // border: '2px solid',
      // borderColor: 'grey.500',
      // bg: mode(`${c}.300`, `${c}.600`)(props),
      // borderTopRadius: 'lg',
      // borderBottom: 'none',
      borderRadius: "lg",

      _selected: {
        bg: "white",
        // color: mode(`${c}.500`, `${c}.500`)(props),
        color: "black",
        // borderBottom: '3px solid',
        mb: "-2px",
        borderRadius: "lg",
      },
    },
    tablist: {
      display: "flex",
      borderRadius: "lg",
      mb: "30px",
      // border: '2px solid',
      // borderColor: 'grey.500',
      // justifyContent: 'center',
      // borderBottom: '2x solid',
      // borderColor: 'inherit',
    },
    tabpanel: {
      p: 0,
      // border: '2px solid',
      // borderColor: 'inherit',
      // borderBottomRadius: 'lg',
      // borderTopRightRadius: 'lg',
    },
  };
});

// define custom variants
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      // border: '2px solid',
      // borderColor: 'transparent',
      // bg: mode(`${c}.300`, `${c}.600`)(props),
      // borderTopRadius: 'lg',
      // borderBottom: 'none',
      _selected: {
        bg: "transparent",
        color: mode(`${c}.500`, `${c}.500`)(props),
        borderBottom: "3px solid",
        mb: "-2px",
      },
    },
    tablist: {
      display: "flex",
      justifyContent: "center",
      borderBottom: "2x solid",
      borderColor: "inherit",
    },
    // tabpanel: {
    //   border: '2px solid',
    //   borderColor: 'inherit',
    //   borderBottomRadius: 'lg',
    //   borderTopRightRadius: 'lg',
    // },
  };
});

const variants = {
  colorful: colorfulVariant,
  segmented: segmentedVariant,
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  // size: 'xl',
  // variant: 'colorful',
  colorScheme: "brand",
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
