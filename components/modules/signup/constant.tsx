import { createContext } from "react";

type stepProps = 0 | 1 | 2;
type SignupType = {
  step: stepProps;
  setStep: (value: stepProps) => void;
};

export const SignupContext = createContext<SignupType>({ step: 0, setStep: (value: stepProps) => {} });
