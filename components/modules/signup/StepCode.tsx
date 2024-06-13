import React, { useContext } from "react";
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
import { SignupContext } from "@/app/page";
const StepCode: React.FC = () => {
  const { step, setStep } = useContext(SignupContext);
  return (
    <Container>
      <Box>
        <Text>My</Text>
        <Text>ko</Text>
      </Box>
      <Container>
        <Box>Back</Box>
        <Box>
          <Heading>Enter Verification Code</Heading>
          <Text>We have just sent a verification code to tynisha*****@mail.com</Text>
        </Box>
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Text>Send the code again</Text>
        <Button colorScheme="brand" onClick={() => setStep(2)}>
          Verify
        </Button>
      </Container>
    </Container>
  );
};
export default StepCode;
