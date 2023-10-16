import { Box, HStack, Text, Icon } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { PiHandWavingFill } from "react-icons/pi";
import SearchBOx from "../../common/SearchBox";

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
        <SearchBOx />
      </HStack>
    </Box>
  );
};

export default Header;
