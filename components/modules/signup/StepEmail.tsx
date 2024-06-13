import React, { useContext } from "react";
import { Box, Container, Flex, Input, Text, Button, Radio } from "@chakra-ui/react";
import { SignupContext } from "./constant";
const StepEmail: React.FC = () => {
  const { step, setStep } = useContext(SignupContext);
  return (
    <Container>
      <Box>
        <Text>My</Text>
        <Text>ko</Text>
      </Box>
      <Container>
        <Box>
          <Text>Get Your Personal</Text>
          <Box>
            <Text>Virtual Assistant</Text>
            <Text>Now!</Text>
          </Box>
        </Box>
        <Input placeholder="large size" size="lg" />
        <Button colorScheme="brand" onClick={() => setStep(1)}>
          Next
        </Button>
        <Flex>
          <Radio>By proceeding, you agree to the</Radio>
          <Text>Terms and Conditions</Text>
        </Flex>
      </Container>
    </Container>
  );
};
export default StepEmail;
