import { Box, Button, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// const navList = [
//   {
//     title: "Mint",
//     route: "?type=mint",
//   },
//   {
//     title: "Portfolio",
//     route: "/portfolio",
//   },
//   {
//     title: "Docs",
//     route: "/docs",
//   },
// ];
const docList = [
  {
    img: "/img/common/icon-x.svg",
    link: "https://twitter.com/stablepp",
    name: "Twitter",
  },
  {
    img: "/img/common/icon-discord.svg",
    link: "https://discord.gg/uwnMswHrgj",
    name: "Discord",
  },
  {
    img: "/img/common/icon-telegram.svg",
    link: "https://t.me/Stablepp",
    name: "Telegram",
  },
  {
    img: "/img/common/icon-doc.svg",
    link: "https://medium.com/@Stablepp",
    name: "Medium",
  },
];
const AppHeader: React.FC = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const router = useRouter();
  return (
    <Box
      h={20}
      id="header">
      <Flex
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={1}
        alignItems="center"
        justifyContent={"space-between"}
        bg="#fff"
        boxShadow={"0 1px 20px 0 #0000001A"}
        h={20}
        px={5}>
        <Box>
          <NextLink href={"/"}>
            <Flex alignItems="center">
              <Image
                src="/img/common/logo.svg"
                alt="wrc-20_icon"
                pr="2"
                h={8}
              />
              {isLargerThan800 && (
                <Text
                  variant={"h1"}
                  fontSize={24}>
                  Stable++
                </Text>
              )}
            </Flex>
          </NextLink>
        </Box>

        {/* <Flex
          alignItems="center"
          gap={4}
          color="#000">
          {navList.map((item) => {
            const active = pathname?.includes(item.route || "");
            return (
              <NextLink
                href={item.route ?? "#"}
                key={item.title}>
                <Text
                  py={2}
                  px={4}
                  variant="pageLink"
                  sx={{
                    fontWeight: active ? "600" : "500",
                    fontFamily: "Inter",
                    color: active ? "brand.500" : "secondary.600",
                    backgroundColor: active ? "grey.50" : "transparent",
                  }}>
                  {item.title}
                </Text>
              </NextLink>
            );
          })}
        </Flex> */}
        <Flex sx={{ gap: 5 }}>
          {isLargerThan800 && (
            <Flex
              alignItems="center"
              gap={[6, 6, 4]}
              color="#000">
              {docList.map((item) => {
                return (
                  <Link
                    href={item.link}
                    key={item.name}>
                    <Text
                      py={2}
                      px={4}
                      sx={{
                        fontWeight: "500",
                        color: "black",
                        backgroundColor: "transparent",
                        _hover: {
                          color: "#8C7CEE",
                        },
                      }}>
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </Flex>
          )}
          <Button onClick={() => router.push("/mint")}>Launch App</Button>
        </Flex>

        {/* <CollectWallet></CollectWallet> */}
      </Flex>
    </Box>
  );
};
export default AppHeader;
