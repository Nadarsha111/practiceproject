import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import {FaBars, FaUserTie} from "react-icons/fa";

const TopNav = ({title,onOpen}) => {
  return (
    <Box bg="white">
      <HStack maxW="70rem" justify="space-between" px="10" h="20" >
        <Icon as={FaBars} onClick={onOpen}
        display={{
          base:"block",
          lg:"none"
        }}/>
        <Heading>{title}</Heading>

        <Menu>
          <MenuButton fontSize="2xl">
            <Icon as={FaUserTie} />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
