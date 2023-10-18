import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import DropMenu from "../../../common/DropMenu";

function Header() {
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
      <Box>
        <DropMenu menuItems={options} />
      </Box>
    </HStack>
  );
}

export default Header;
