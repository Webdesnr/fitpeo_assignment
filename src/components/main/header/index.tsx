import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import { PiHandWavingFill } from "react-icons/pi";
import SearchBOx from "../../common/SearchBox";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <Box paddingY={{ base: "5", lg: "8" }}>
      <HStack
        flexDir={{ base: "row-reverse", sm: "row" }}
        justifyContent="space-between"
      >
        <UserIcon />
        <Text
          display={{ base: "none", sm: "block" }}
          fontWeight={{ sm: "medium" }}
          fontSize={{ sm: "lg" }}
        >
          Hello shahrukh
          <Icon as={PiHandWavingFill} color="#DCB899" fontSize="2xl" />,
        </Text>
        <SearchBOx />
      </HStack>
    </Box>
  );
};

export default Header;
