"use client";
import { createContext, useState } from "react";
import { Box, Container, Flex, Input, Text, Button, Radio } from "@chakra-ui/react";
import Head from "next/head";
import { useContext } from "react";
import StepEmail from "@/components/modules/signup/StepEmail";
import StepCode from "@/components/modules/signup/StepCode";
import StepAssistant from "@/components/modules/signup/StepAssistant";
type stepProps = 0 | 1 | 2;
type SignupType = {
  step: stepProps;
  setStep: (value: stepProps) => void;
};

export const SignupContext = createContext<SignupType>({ step: 0, setStep: (value: stepProps) => {} });

export default function Home() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [form, setForm] = useState({
    email: "",
    code: "",
    assistantName: "",
  });

  const stragety = {
    0: <StepEmail></StepEmail>,
    1: <StepCode></StepCode>,
    2: <StepAssistant></StepAssistant>,
  };
  const stepDom = stragety[step];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Box>
          <Text>My</Text>
          <Text>ko</Text>
        </Box>
        <SignupContext.Provider value={{ step, setStep }}>
          <Container>{stepDom}</Container>
        </SignupContext.Provider>
      </Container>
    </>
  );
}
