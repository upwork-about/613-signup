import React, { useContext } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Input,
  Text,
  Button,
  FormErrorMessage,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { SignupContext } from "./constant";
import { Field, Form, Formik } from "formik";
const StepCode: React.FC = () => {
  const { step, setStep, form, setForm } = useContext(SignupContext);
  const validateCode = (value: string) => {
    let error;
    if (!value) {
      error = "please input the code";
    } else if (value.length !== 5) {
      error = "Please fill in the complete verification code ";
    }
    return error;
  };
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
      <Formik
        initialValues={{ code: "" }}
        onSubmit={(values, actions) => {
          console.log(1235);
          setTimeout(() => {
            setForm({ ...form, ...values });
            setStep(2);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="code" validate={validateCode}>
              {({ field, form: formikForm }: any) => (
                <FormControl isInvalid={formikForm.errors.code && formikForm.touched.code}>
                  <HStack sx={{ mt: 10, gap: 6 }}>
                    <PinInput
                      {...field}
                      value={form.code}
                      onChange={(e) => {
                        console.log(e);
                        setForm({ ...form, code: e });
                        formikForm.setFieldValue("code", e);
                        console.log(formikForm);
                      }}
                      size="lg"
                      placeholder=""
                      variant={"filled"}
                    >
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <FormErrorMessage>{formikForm.errors.code}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Text sx={{ mt: 8, fontWeight: "700", cursor: "pointer" }} variant="p1" color="brand.900">
              Send the code again
            </Text>
            <Button sx={{ mt: 8 }} colorScheme="brand" size="xl" isLoading={props.isSubmitting} type="submit">
              Verify
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default StepCode;
