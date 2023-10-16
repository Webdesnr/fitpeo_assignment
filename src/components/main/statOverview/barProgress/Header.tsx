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
import DropMenu from "../../../common/DropMenu";

function Header() {
  const [selectedItem, setSelectedItem] = useState("Quarterly");
  const options = ["Quarterly", "Yearly", "Monthly"];
  return (
    <HStack justifyContent="space-between">
      <Box>
        <Heading as="h3" fontSize={{ base: "sm", md: "xl" }}>
          Overview
        </Heading>
        <Text color="gray" fontSize={{ base: "x-small", md: "lg" }}>
          Monthly Earning
        </Text>
      </Box>
      <DropMenu
        label={selectedItem}
        menuItems={options}
        onClick={(item: string) => setSelectedItem(item)}
      />
    </HStack>
  );
}

export default Header;
