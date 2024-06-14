import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { inputTheme } from "./input";

const isFunction = (value: any): value is Function => typeof value === "function";

export function runIfFn<T, U>(valueOrFn: T | ((...fnArgs: U[]) => T), ...args: U[]): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  textAlign: "center",
});

const variants = {
  filled: defineStyle(
    () =>
      runIfFn(
        defineStyle(() => {
          return {
            field: {
              fontWeight: "semibold", // change font weight to semibold
              bg: "secondary.600",
              _placeholder: {
                color: "secondary.900",
              },
              _hover: {
                borderWidth: 1,
                borderColor: "brand.200",
              },

              _focusVisible: {
                borderWidth: 1,
                borderColor: "brand.200",
              },
            },
          };
        })
      )?.field ?? {}
  ),
};

export const pinInputTheme = defineStyleConfig({
  baseStyle,
  variants,
});
