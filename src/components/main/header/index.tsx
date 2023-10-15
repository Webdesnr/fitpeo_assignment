import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiUserCircle } from "react-icons/bi";
import { PiHandWavingFill } from "react-icons/pi";

const Header = () => {
  return (
    <Box paddingY={{ base: "5", lg: "8" }}>
      <HStack justifyContent="space-between">
        <Icon
          as={BiUserCircle}
          display={{ base: "block", sm: "none" }}
          fontSize="4xl"
        />
        <Text
          display={{ base: "none", sm: "block" }}
          fontWeight={{ sm: "medium" }}
          fontSize={{ sm: "lg" }}
        >
          Hello shahrukh
          <Icon as={PiHandWavingFill} color="#DCB899" fontSize="2xl" />,
        </Text>
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
