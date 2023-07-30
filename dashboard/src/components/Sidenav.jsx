import dashicon from "../../public/dashboardicon.png";
import transactionicon from "../../public/transactionicon.png";
import { Box, HStack, Heading, Icon, Img, Stack, Text, flexbox } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: dashicon,
      text: "Dash Board",
      links: "/",
    },
    {
      icon: transactionicon,
      text: "Transactions",
      links: "/transactons",
    },
  ];
  return (
    <Stack
      w={{
        base:"full",
        lg:"16rem"
      }}
      justify="space-between"
      h="100vh"
      bg="white"
      boxShadow={{
        base:"none",
        lg:"lg"

      }}
    
    >
      <Box>
        <Heading as="h1" fontSize="20px" pt="40px" textAlign="center">
          DASH BOARD
        </Heading>
        <Box mx="3" mt="6 ">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              px="4"
              py="3"
              key={nav.text}
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Img src={nav.icon} />
              {/* <Icon as={nav.icon} /> */}
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mx="3" mb="6px">
        <HStack
          borderRadius="10px"
          px="4"
          py="3"
          boxShadow="sm"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
