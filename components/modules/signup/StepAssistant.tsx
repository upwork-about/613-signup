import React from "react";
import { Box, Container, Flex, Input, Text, Button, Radio } from "@chakra-ui/react";
const StepEmail: React.FC = () => {
  return (
    <Container>
      <Box>
        <Text>My</Text>
        <Text>ko</Text>
      </Box>
      <Container>
        <Box>
          <Text>Almost Done!</Text>
          <Box>
            <Text>Set Up Your Virtual</Text>
            <Text>{`Assistant's Email`}</Text>
          </Box>
        </Box>
        <Flex>
          <Input placeholder="large size" size="lg" />
          <Text>
            <Text>@myko</Text>
            <Text>assistant</Text>
            <Text>.com</Text>
          </Text>
        </Flex>

        <Button colorScheme="brand">Done</Button>
      </Container>
    </Container>
  );
};
export default StepEmail;
