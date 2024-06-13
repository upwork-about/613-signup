import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = defineStyle({
  container: {
    borderRadius: "8px", // disable the border radius
    fontWeight: "medium", // change the font weight to normal
    fontFamily: "Inter", // change the font family to monospaced
    color: "white",
    verticalAlign: "middle",
  },
  // borderRadius: "8px", // disable the border radius
  // fontWeight: "500", // change the font weight to normal
  // fontFamily: "Inter", // change the font family to monospaced
  // boxShadow: "0px -4px 0px -1px #9F91F3",
});

const brandPrimary = definePartsStyle({
  container: {
    bg: "orange.400",
    color: "blackAlpha.700",
  },
});

const thick = definePartsStyle({
  container: {
    px: "4",
    py: "2",
    bg: "blue.400",
  },
});

const idTag = definePartsStyle({
  container: {
    p: "2",
    bg: "rgba(134, 139, 255, 0.15)",
    color: "baseContent3",
  },
});

const ml = defineStyle({
  px: "3",
  py: "2",
  fontSize: "25",
});

const sizes = {
  ml: definePartsStyle({ container: ml, label: ml }),
};

export const tagTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    idTag,
  },
});
