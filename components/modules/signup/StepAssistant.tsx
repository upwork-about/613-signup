import React, { useContext } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, useToast, Flex, Input, Text, Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { SignupContext } from "./constant";
import { Field, Form, Formik } from "formik";
const StepAssistant: React.FC = () => {
  const { step, setStep, form, setForm } = useContext(SignupContext);
  const toast = useToast();
  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "please Input the Name";
    }
    return error;
  };
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

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          console.log(1235, values);
          setForm({ ...form, ...values });
          setTimeout(() => {
            toast({
              title: "Success",
              description: JSON.stringify(form, null, 2),
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form: formikForm }: any) => (
                <FormControl isInvalid={formikForm.errors.name && formikForm.touched.name}>
                  <Flex sx={{ alignItems: "center", gap: 3, mt: 10 }}>
                    <Input {...field} sx={{ flex: 1 }} variant={"filled"} placeholder="Assistant Name" size="lg" />
                    <Text variant={"p1"} sx={{ flex: 1, fontWeight: "700", display: "inline-flex" }}>
                      <Text color="brand.900">@myko</Text>
                      <Text color="warning.900">assistant</Text>
                      <Text>.com</Text>
                    </Text>
                  </Flex>
                  <FormErrorMessage>{formikForm.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button sx={{ mt: 8 }} colorScheme="brand" size="xl" isLoading={props.isSubmitting} type="submit">
              Done
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default StepAssistant;
