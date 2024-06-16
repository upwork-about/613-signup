import { createContext } from "react";

type stepProps = 0 | 1 | 2;
type formProps = { name: string; email: string; code: string };
type SignupType = {
  step: stepProps;
  setStep: (value: stepProps) => void;
  form: formProps;
  setForm: (value: formProps) => void;
};

export const SignupContext = createContext<SignupType>({
  step: 0,
  setStep: (value: stepProps) => {},
  form: { name: "", email: "", code: "" },
  setForm: (value: formProps) => {},
});

export const isValidEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
};
