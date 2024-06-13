import { statAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(statAnatomy.keys);

const base = defineStyle({
  container: {
    py: "10px",
  },

  label: {
    fontSize: "14px",
    color: "base.60",
    mb: "4px",
  },
  number: {
    fontSize: "24px",
    color: "base.100",
    fontWeight: "500",
  },
});

const info = definePartsStyle({
  container: {
    py: 4,
  },

  label: {
    fontSize: "14px",
    color: "base.60",
    mb: "4px",
  },
  number: {
    fontSize: "24px",
    color: "base.100",
  },
});

const simple = definePartsStyle({
  container: {
    py: 2,
  },

  label: {
    fontSize: "14px",
    color: "base.60",
    mb: "4px",
  },
  number: {
    fontSize: "20px",
    color: "base.100",
    fontWeight: "medium",
  },
  helpText: {
    fontSize: "12px",
    color: "base.100",
    fontWeight: "medium",
  },
});
export const statTheme = defineMultiStyleConfig({
  variants: { info, base, simple },
  defaultProps: {
    variant: "base",
  },
});
