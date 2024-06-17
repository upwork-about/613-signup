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
  Divider,
  Image,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SignupContext, isValidEmail } from "./constant";
import { Field, Form, Formik } from "formik";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import "./index.css";

const list = [
  {
    title: "John Smith",
    label: ["Vice President of Sales", "Global Ventures Ltd."],
    img: "/img/avatar-1.png",
    distance: "0",
  },
  {
    title: "Alice Johnson",
    label: ["Vice President of Sales", "FutureTech Solutions"],
    img: "/img/avatar-2.png",
    distance: "-60px",
  },
  {
    title: "Jane Doe",
    label: ["Senior Vice President of Marketing", "Tech Innovators Inc."],
    img: "/img/avatar-3.png",
    phone: "(555) 123-4567",
    email: "jane.doe@innovators.com",
    isVer: true,
    distance: "70px",
  },
];
const StepEmail: React.FC = () => {
  const { step, setStep, form, setForm } = useContext(SignupContext);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Box>
      <Box sx={{ pt: 200 }}>
        <Flex sx={{ flexDirection: "column", alignItems: "center", gap: 3, position: "relative" }}>
          {list.map((item) => {
            return (
              <Flex
                key={item.title}
                sx={{
                  w: 400,
                  bg: "white",
                  px: 6,
                  py: 3,
                  borderRadius: "10px",
                  flexDirection: item.isVer ? "column" : "row",
                  alignItems: item.isVer ? "flex-start" : "center",
                  justifyContent: "space-between",
                  position: "relative",
                  right: item.distance,
                }}
              >
                <Flex sx={{ gap: 4 }}>
                  <Image src={item.img} alt="" sx={{ borderRadius: "full", w: 14, h: 14 }}></Image>
                  <Box>
                    <Text sx={{ fontSize: 16, color: "black.900", fontWeight: "500" }}>{item.title}</Text>

                    <Text variant={"p2"} color="black.700">
                      {item.label[0]}
                    </Text>
                    <Text variant={"p2"} color="black.700">
                      {item.label[1]}
                    </Text>
                  </Box>
                </Flex>
                {item.isVer ? (
                  <Flex sx={{ gap: 5, mt: 3 }}>
                    <Flex sx={{ alignItems: "center", gap: 2 }}>
                      <Image src="/img/icon-phone-fill.png" alt="" sx={{ w: 5, h: 4 }} />
                      <Text variant={"p2"}>{item.phone}</Text>
                    </Flex>
                    <Flex sx={{ alignItems: "center", gap: 2 }}>
                      <Image src="/img/icon-email-fill.png" alt="" sx={{ w: 5, h: 4 }} />
                      <Text variant={"p2"}>{item.email}</Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex sx={{ gap: 4 }}>
                    <Image src="/img/icon-phone-fill.png" alt="" sx={{ w: "21px", h: "17px" }} />
                    <Image src="/img/icon-email-fill.png" alt="" sx={{ w: "21px", h: "17px" }} />
                  </Flex>
                )}
              </Flex>
            );
          })}
          <Image
            src="/img/landing-tip.png"
            alt=""
            sx={{ position: "absolute", top: "-40px", left: "30px", w: "40px", h: "43px" }}
          ></Image>

          <Box sx={{ position: "absolute", right: 0, bottom: -100, w: "190px" }}>
            <Box sx={{ bg: "grey.900", borderRadius: "10px", p: 4, position: "relative" }}>
              <Flex sx={{ gap: 2 }}>
                <Image src="/img/icon-email.png" alt="" sx={{ w: "18px", h: "18px" }} />
                <Text sx={{ fontSize: "14px", color: "white", fontWeight: "600" }}>Myko</Text>
              </Flex>
              <Divider sx={{ my: 3 }}></Divider>
              <Box>
                <Text sx={{ fontSize: "32px", color: "secondary.500", fontWeight: "700" }}>28</Text>
                <Flex sx={{ gap: 2 }}>
                  <Text sx={{ fontSize: "16px", color: "brand.900", fontWeight: "500" }}>Sales Leads</Text>
                  <Text sx={{ fontSize: "16px", color: "secondary.900", fontWeight: "500" }}>Found</Text>
                </Flex>
              </Box>
              <Flex
                sx={{
                  position: "absolute",
                  top: "-17px",
                  right: "-17px",
                  w: "34px",
                  h: "34px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: 16,
                  bg: "brand.900",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "full",
                }}
              >
                1
              </Flex>
            </Box>
            <Image src="/img/icon-line.png" alt="" sx={{ mt: 3 }}></Image>
          </Box>
        </Flex>
      </Box>
      <Box sx={{ mt: 200 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={500} /*速度：单位毫秒*/
          loop={true} /*循环*/
          autoplay={true} /*自动播放*/
          pagination={{
            clickable: true,
          }}
          onSlideChangeTransitionStart={(el) => {
            console.log(el);
            console.log(el.realIndex);
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <Flex sx={{ flexDirection: "column", alignItems: "center", pb: 40 }}>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Revolutionize Your Workflow with Myko:
              </Text>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Your AI Efficiency Ally
              </Text>
              <Text sx={{ fontSize: "18px", fontWeight: "500", color: "#5F6488", w: 472, textAlign: "center", mt: 6 }}>
                Effortlessly uncover sales leads, key professional profiles, prime hiring targets, and in-depth company
                insights, boosting your productivity.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Revolutionize Your Workflow with Myko:
              </Text>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Your AI Efficiency Ally
              </Text>
              <Text sx={{ fontSize: "18px", fontWeight: "500", color: "#5F6488", w: 472, textAlign: "center", mt: 6 }}>
                Effortlessly uncover sales leads, key professional profiles, prime hiring targets, and in-depth company
                insights, boosting your productivity.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Revolutionize Your Workflow with Myko:
              </Text>
              <Text variant={"h2"} color="white" sx={{ textAlign: "center" }}>
                Your AI Efficiency Ally
              </Text>
              <Text sx={{ fontSize: "18px", fontWeight: "500", color: "#5F6488", w: 472, textAlign: "center", mt: 6 }}>
                Effortlessly uncover sales leads, key professional profiles, prime hiring targets, and in-depth company
                insights, boosting your productivity.
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};
export default StepEmail;
