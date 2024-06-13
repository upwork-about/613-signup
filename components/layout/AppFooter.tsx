import { BoxProps, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const docList = [
  {
    img: "/img/common/icon-x.svg",
    link: "https://twitter.com/stablepp",
    name: "twitter",
  },
  {
    img: "/img/common/icon-discord.svg",
    link: "https://discord.gg/uwnMswHrgj",
    name: "discord",
  },
  {
    img: "/img/common/icon-telegram.svg",
    link: "https://t.me/Stablepp",
    name: "telegram",
  },
  {
    img: "/img/common/icon-doc.svg",
    link: "https://medium.com/@Stablepp",
    name: "medium",
  },
];
const AppFooter: React.FC<{ withRight?: boolean; withClearCache?: boolean; sx?: BoxProps }> = ({
  withRight = true,
  withClearCache,
  sx,
}) => {
  return (
    <Flex
      sx={{
        py: 5,
        bg: "#fff",
        flexDirection: ["column-reverse", "column-reverse", "row"],
        justifyContent: "space-between",
        px: 10,
        gap: 5,
        alignItems: "center",
        ...sx,
      }}
      id="footer"
    >
      {withRight && <Text fontSize="14px">© 2024, Stable++. All rights reserved</Text>}
      <Flex
        sx={{
          alignItems: "center",
          gap: 10,
        }}
      >
        {withClearCache && (
          <Button
            bgColor={"rgba(255,255,255,0.01)"}
            _hover={{
              bgColor: "rgba(255, 255, 255, 1)",
            }}
            boxShadow={"none"}
          >
            clear cache
          </Button>
        )}

        {docList.map((item) => {
          return (
            <Link key={item.img} href={item.link} target="_blank">
              <Image w={item.name === "twitter" ? "16px" : "23px"} src={item.img} alt={item.img} />
            </Link>
          );
        })}
      </Flex>
      <Button
        bgColor={"rgba(255,255,255,0.01)"}
        ml={40}
        _hover={{
          bgColor: "rgba(255, 255, 255, 0.01)",
        }}
        color={"rgba(255,255,255,0.01)"}
        boxShadow={"none"}
      >
        clear cache
      </Button>
    </Flex>
  );
};
export default AppFooter;
