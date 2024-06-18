import React, { useContext, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Input,
  Text,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { SignupContext, isValidEmail } from "./constant";
import { Field, Form, Formik } from "formik";
import { useSignup } from "@/hooks/useSignup";
const StepEmail: React.FC = () => {
  const { step, setStep, form, setForm } = useContext(SignupContext);
  const [isCheck, setIsCheck] = useState(false);
  const { postIsEmailRegister, postSendVerificationEmail } = useSignup();
  const toast = useToast();

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!isValidEmail(value)) {
      error = "Incorrect email format";
    }
    return error;
  };
  const validateRadio = (value: string) => {
    let error;
    if (!value) {
      error = "please agree the terms";
    }
    return error;
  };
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
      <Formik
        initialValues={{ email: form.email, radio: false }}
        onSubmit={async (values, actions) => {
          const res = await postIsEmailRegister(values.email);
          if (!res.is_registered) {
            console.log(res, "res");
            const resCode = await postSendVerificationEmail(values.email);
            if (resCode.verification_code_id) {
              setForm({ ...form, ...values, codeId: resCode.verification_code_id });
              setStep(1);
              toast({
                title: "The verification code has been sent to your email address, please check",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Sorry, an unknown error caused the verification code to be unable to be sent.",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          } else {
            toast({
              title: "sorry, the current email has been registered",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        }}
      >
        {(props) => (
          <Form>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <Input {...field} sx={{ mt: 10 }} variant="filled" placeholder="Email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button sx={{ mt: 8 }} colorScheme="brand" size="xl" isLoading={props.isSubmitting} type="submit">
              Next
            </Button>
            <Field name="radio" validate={validateRadio}>
              {({ field, form }: any) => (
                <FormControl sx={{ mt: 4 }} isInvalid={form.errors.radio && form.touched.radio}>
                  <Checkbox {...field} size={["md", "lg"]} colorScheme="brand">
                    <Flex>
                      <Text variant="p1">By proceeding, you agree to the</Text>
                      <Text variant={"p1"} sx={{ color: "brand.500", fontWeight: "500", ml: 2 }}>
                        Terms and Conditions
                      </Text>
                    </Flex>
                  </Checkbox>
                  <FormErrorMessage>{form.errors.radio}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>

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
