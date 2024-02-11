import React from "react";
import { Box, Heading, Icon, HStack, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transcations",
      link: "/transcations",
    },
  ];

  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh">
      <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
        @CODINGOSOM
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
            key={nav.text}
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
            }}
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px">{nav.text}</Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
