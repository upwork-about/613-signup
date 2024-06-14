import React, { useContext } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Input,
  Text,
  Button,
  Radio,
  Heading,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { SignupContext } from "./constant";
const StepCode: React.FC = () => {
  const { step, setStep } = useContext(SignupContext);
  return (
    <Box>
      <Flex sx={{ alignItems: "center", gap: 3, color: "secondary.900", cursor: "pointer" }} onClick={() => setStep(0)}>
        <ArrowBackIcon></ArrowBackIcon>
        <Text variant={"p1"} color="secondary.900">
          Back
        </Text>
      </Flex>
      <Box sx={{ mt: 10 }}>
        <Text variant={"h1"}>Enter Verification Code</Text>
        <Text sx={{ mt: 4 }} variant={"p1"} color="secondary.900">
          We have just sent a verification code to tynisha*****@mail.com
        </Text>
      </Box>
      <HStack sx={{ mt: 10, gap: 6 }}>
        <PinInput size="lg" placeholder="" variant={"filled"}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Text sx={{ mt: 8, fontWeight: "700" }} variant="p1" color="brand.900">
        Send the code again
      </Text>
      <Button sx={{ mt: 8 }} colorScheme="brand" size="xl" onClick={() => setStep(2)}>
        Verify
      </Button>
    </Box>
  );
};
export default StepCode;
