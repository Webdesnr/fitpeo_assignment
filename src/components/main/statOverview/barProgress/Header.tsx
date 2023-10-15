import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Header() {
  const [selectedItem, setSelectedItem] = useState("Quarterly");
  const menuItems = ["Quarterly", "Yearly", "Monthly"];
  return (
    <HStack justifyContent="space-between">
      <Box>
        <Heading as="h6" fontSize={{ base: "sm", md: "xl" }}>
          Overview
        </Heading>
        <Text color="gray" fontSize={{ base: "x-small", md: "lg" }}>
          Monthly Earning
        </Text>
      </Box>
      <Menu>
        <MenuButton
          fontSize={{ base: "sm", md: "lg" }}
          as={Button}
          color="gray"
          bg="whitesmoke"
          variant="solid"
          rightIcon={<ChevronDownIcon />}
        >
          {selectedItem}
        </MenuButton>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              onClick={() => setSelectedItem(item)}
              fontSize={{ base: "sm", md: "lg" }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default Header;
