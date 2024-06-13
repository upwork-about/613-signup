import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: "medium",
    bg: "gray.200",
    color: "gray.200",
    _hover: {
      bg: "base.200",
      color: "white",
    },
  },
  list: {
    // this will style the MenuList component
    borderRadius: "xl",
    border: "none",
    bg: "gray.200",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    // color: 'gray.200',
    bg: "base.200",
    borderRadius: "xl",
    w: "94%",
    m: "8px auto",
    py: "10px",
    _hover: {
      bg: "base.100",
    },
    _focus: {
      bg: "base.100",
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: "0.8",
    fontFamily: "Inter",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    // this will style the MenuDivider component
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted",
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
