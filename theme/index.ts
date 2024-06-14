// 1. import `extendTheme` function
import { Checkbox, PinInput, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Urbanist } from "next/font/google";

import { accordionTheme } from "./components/accordion";
import { buttonTheme } from "./components/button";
import { cardTheme } from "./components/card";
import { codeTheme } from "./components/code";
import { inputTheme } from "./components/input";
import { menuTheme } from "./components/menu";
import { modalTheme } from "./components/modal";
import { statTheme } from "./components/stat";
import { stepperTheme } from "./components/stepper";
import { tableTheme } from "./components/table";
import { tabsTheme } from "./components/tabs";
import { tagTheme } from "./components/tag";
import { textTheme } from "./components/text";
import { checkboxTheme } from "./components/checkbox";
import { pinInputTheme } from "./components/pin-input";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: `${urbanist.style.fontFamily}`,
    body: `${urbanist.style.fontFamily}`,
  },
  config,
  colors: {
    brand: {
      "50": "#34CAA5",
      "100": "#34CAA5",
      "200": "#34CAA5",
      "300": "#34CAA5",
      "400": "#34CAA5",
      "500": "#34CAA5",
      "600": "#34CAA5",
      "700": "#34CAA5",
      "800": "#34CAA5",
      "900": "#34CAA5",
    },
    secondary: {
      "50": "#ffffff",
      "100": "#ffffff",
      "200": "#ffffff",
      "300": "#ffffff",
      "400": "#ffffff",
      "500": "#FAFAFA",
      "600": "#F5F5F5",
      "700": "#b5abf5",
      "800": "#a294f2",
      "900": "#747681",
    },
    black: {
      "50": "#111827",
      "100": "#111827",
      "200": "#111827",
      "300": "#111827",
      "400": "#111827",
      "500": "#111827",
      "600": "#111827",
      "700": "#111827",
      "800": "#111827",
      "900": "#111827",
    },

    grey: {
      "50": "#6a7282",
      "100": "#535a66",
      "200": "#484d58",
      "300": "#3c414a",
      "400": "#31353c",
      "500": "#1A1C20",
      "600": "#030304",
      "700": "#000000",
      "800": "#000000",
      "900": "#000000",
    },

    warning: {
      "50": "#fef2d2",
      "100": "#fde3a0",
      "200": "#fddb87",
      "300": "#fcd46e",
      "400": "#fccc55",
      "500": "#FBBD23",
      "600": "#e7a604",
      "700": "#ce9404",
      "800": "#b58203",
      "900": "#FFC047",
    },
    info: "#3ABFF8",
    error: "#F87272",
    success: "#28BB84",
    white: "#FFFFFF",
  },

  components: {
    Button: buttonTheme,
    Card: cardTheme,
    Input: inputTheme,
    Tabs: tabsTheme,
    Stat: statTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "gradient1",
          rounded: "8px",
        },
      },
    },
    Text: textTheme,
    Accordion: accordionTheme,
    Stepper: stepperTheme,
    Code: codeTheme,
    Tag: tagTheme,
    Table: tableTheme,
    Checkbox: checkboxTheme,
    PinInput: pinInputTheme,
  },
});

export default theme;
