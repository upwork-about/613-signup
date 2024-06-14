import React, { useContext, useState } from "react";
import { Box, Container, Flex, Input, Text, Button, Checkbox } from "@chakra-ui/react";
import { SignupContext } from "./constant";
const StepEmail: React.FC = () => {
  const { step, setStep } = useContext(SignupContext);
  const [isCheck, setIsCheck] = useState(false);
  return (
    <Box>
      <Box>
        <Text variant={"h1"}>Get Your Personal</Text>
        <Flex>
          <Text variant={"h1"} color="brand.900">
            Virtual Assistant{" "}
          </Text>
          <Text variant={"h1"} sx={{ pl: 3 }}>
            Now!
          </Text>
        </Flex>
      </Box>
      <Input sx={{ mt: 10 }} variant="filled" placeholder="Email" />
      <Button sx={{ mt: 8 }} colorScheme="brand" size="xl" onClick={() => setStep(1)}>
        Next
      </Button>
      <Flex sx={{ mt: 3, alignItems: "center" }}>
        <Checkbox
          size={["md", "lg"]}
          colorScheme="brand"
          isChecked={isCheck}
          onChange={(e) => {
            console.log(e.target.checked);
            setIsCheck(e.target.checked);
          }}
        >
          <Text variant="p1">By proceeding, you agree to the</Text>
        </Checkbox>

        <Text variant={"p1"} sx={{ color: "brand.500", fontWeight: "500", ml: 2 }}>
          Terms and Conditions
        </Text>
      </Flex>
      <Flex sx={{ mt: 10, alignItems: "center" }}>
        <Text variant={"p1"} sx={{ color: "secondary.900" }}>
          Already have an account?
        </Text>

        <Text variant={"p1"} sx={{ color: "brand.500", fontWeight: "500", ml: 2 }}>
          Sign In
        </Text>
      </Flex>
    </Box>
  );
};
export default StepEmail;
