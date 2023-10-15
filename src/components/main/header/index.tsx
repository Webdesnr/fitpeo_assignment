import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { Search2Icon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box paddingY="1rem" color="gray">
      <HStack justifyContent="space-between">
        <Icon
          as={BiUserCircle}
          display={{ base: "block", lg: "none" }}
          fontSize="4xl"
        />
        <Text display={{ base: "none", lg: "block" }}>Hello shahrukh,</Text>
        <InputGroup width={{ base: "auto" }}>
          <InputLeftElement>
            <Search2Icon color="GrayText" />
          </InputLeftElement>
          <Input placeholder="Search" bg="white" border="none" />
        </InputGroup>
      </HStack>
    </Box>
  );
};

export default Header;
