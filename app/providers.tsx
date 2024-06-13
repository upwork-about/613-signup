"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode, useEffect, useState } from "react";

import theme from "../theme";

const Providers = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {mounted && children}

      <ProgressBar height="2px" color="#8686FF" options={{ showSpinner: false }} shallowRouting />
    </ChakraProvider>
  );
};

export default Providers;
