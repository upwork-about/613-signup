import { useToast } from "@chakra-ui/react";

const headers = {
  "Content-Type": "application/vnd.api+json",
  Accept: "application/vnd.api+json",
};

const baseUrl = "https://agents-myko-api-production-app.azurewebsites.net";

const urlList = {
  health_check: "/api/myko/health_check/health_check",
  is_email_registered: "/api/myko/auth/is_email_registered",
  is_assistant_email_picked: "/api/myko/auth/is_assistant_email_picked",
  send_verification_email: "/api/myko/auth/send_verification_email",
  verify_email: "/api/myko/auth/verify_email",
  sign_up: "/api/myko/auth/sign_up",
};

type fetchParamsProps = {
  url: string;
  method?: "GET" | "POST";
  params?: any;
};
const fetcher = async (fetchParams: fetchParamsProps, toast: any) => {
  const url_ = baseUrl + fetchParams.url;

  try {
    const res = await fetch(url_, {
      method: fetchParams.method || "POST",
      headers,
      body: JSON.stringify(fetchParams.params),
    });
    console.log(res, "res");
    if (res.status !== 200) {
      toast({
        title: "The current web interface is temporarily unavailable. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    return res.json();
  } catch (error) {
    console.log(error, "error");
  }
};

export const useSignup = () => {
  const toast = useToast();
  const getHealthCheck = async () => {
    const res = await fetcher({ url: urlList.health_check, method: "GET" }, toast);
    return res;
  };
  const postIsEmailRegister = async (email: string) => {
    const res = await fetcher({ url: urlList.is_email_registered, params: { email } }, toast);
    return res;
  };
  const postIsAssistantEmailPicked = async (email: string) => {
    const res = await fetcher({ url: urlList.is_assistant_email_picked, params: { assistant_email: email } }, toast);
    return res;
  };
  const postSendVerificationEmail = async (email: string) => {
    const res = await fetcher({ url: urlList.send_verification_email, params: { email } }, toast);
    return res;
  };
  const postVerifyEmail = async (params: {
    email: string;
    verification_code_id: string;
    verification_code: string;
  }) => {
    const res = await fetcher({ url: urlList.verify_email, params }, toast);
    return res;
  };
  const postSignUp = async (params: {
    email: string;
    assistant_email: string;
    verification_code_id: string;
    verification_code: string;
  }) => {
    const res = await fetcher({ url: urlList.sign_up, params }, toast);
    return res;
  };
  return {
    getHealthCheck,
    postIsEmailRegister,
    postIsAssistantEmailPicked,
    postSendVerificationEmail,
    postVerifyEmail,
    postSignUp,
  };
};
