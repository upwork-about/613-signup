import React, { useContext } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, useToast, Flex, Input, Text, Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { SignupContext } from "./constant";
import { Field, Form, Formik } from "formik";
import { useSignup } from "@/hooks/useSignup";
const StepAssistant: React.FC = () => {
  const { step, setStep, form, setForm } = useContext(SignupContext);
  const { postSignUp, postIsAssistantEmailPicked } = useSignup();
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
        onSubmit={async (values, actions) => {
          console.log(1235, values);
          const isPickedRes = await postIsAssistantEmailPicked(values.name);
          if (isPickedRes.is_picked) {
            toast({
              title: "The current assistant email address has been selected",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
          const res = await postSignUp({
            email: form.email,
            assistant_email: values.name + "@mykoassistant.com",
            verification_code_id: form.codeId,
            verification_code: form.code,
          });
          console.log(res);
          if (!res) {
            setForm({ ...form, ...values });
            toast({
              title: "Success Register",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            toast({
              title: res.detail,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
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
