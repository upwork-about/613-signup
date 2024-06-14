import React, { useContext } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Input, Text, Button, Radio } from "@chakra-ui/react";
import { SignupContext } from "./constant";
const StepAssistant: React.FC = () => {
  const { step, setStep } = useContext(SignupContext);
  return (
    <Box>
      <Flex sx={{ alignItems: "center", gap: 3, color: "secondary.900", cursor: "pointer" }} onClick={() => setStep(1)}>
        <ArrowBackIcon></ArrowBackIcon>
        <Text variant={"p1"} color="secondary.900">
          Back
        </Text>
      </Flex>
      <Box sx={{ mt: 10 }}>
        <Text variant={"h1"} color="brand.900">
          Almost Done!
        </Text>
        <Box>
          <Text variant={"h1"}>Set Up Your Virtual</Text>
          <Text variant={"h1"}>{`Assistant's Email`}</Text>
        </Box>
      </Box>
      <Flex sx={{ alignItems: "center", gap: 3, mt: 10 }}>
        <Input sx={{ flex: 1 }} variant={"filled"} placeholder="Assistant Name" size="lg" />
        <Text variant={"p1"} sx={{ flex: 1, fontWeight: "700", display: "inline-flex" }}>
          <Text color="brand.900">@myko</Text>
          <Text color="warning.900">assistant</Text>
          <Text>.com</Text>
        </Text>
      </Flex>

      <Button sx={{ mt: 8 }} size="xl" colorScheme="brand">
        Done
      </Button>
    </Box>
  );
};
export default StepAssistant;
