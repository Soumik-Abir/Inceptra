import React from "react";
import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Logo from "../assets/LOGO.png";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <Box
        px={2}
        py={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        background={'rgba(0, 0, 0, 0.6)'}
        position={"relative"}
        zIndex={2}
      >
        <Image width={"150px"} src={Logo} alt="inceptra" />
        <Box
          display={"flex"}
          alignItems={"center"}
          fontWeight={500}
          gap={5}
          mr={2}
        >
          <Text
             color={"#FFFFFF"} _hover={{ color: "#555EAA", borderBottom: "2px solid black"}}
            cursor={"pointer"}
          >
            Home
          </Text>
          <Text
             color={"#FFFFFF"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            About us
          </Text>
          <Text
             color={"#FFFFFF"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Gallery
          </Text>
          <Text
             color={"#FFFFFF"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Crew
          </Text>
          <Text>
            <Menu>
              <MenuButton
                 color={"#FFFFFF"} _hover={{ color: "#26283E", bg: "transparent" }}
                _active={{ bg: "transparent" }}
                bg={"transparent"}
                as={Button}
                rightIcon={<FiChevronDown />}
                p={0}
                cursor={"pointer"}
              >
                Alumni
              </MenuButton>
              <MenuList>
                <MenuItem>Rejester/Log in</MenuItem>
                <MenuItem>Top Alumni in the Lime Light</MenuItem>
                <MenuItem>Notable Alumni</MenuItem>
              </MenuList>
            </Menu>
          </Text>
          <Text
             color={"#FFFFFF"} _hover={{ color: "#26283E", borderBottom: "2px solid black" }}
            cursor={"pointer"}
          >
            Sponsor
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
