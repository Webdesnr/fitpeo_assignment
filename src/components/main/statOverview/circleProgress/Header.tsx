import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <Heading as="h3" fontSize={{ md: "xl" }}>
        Customers
      </Heading>
      <Text color="gray" fontSize={{ base: "sm", xl: "sm" }}>
        Customers that buy products
      </Text>
    </Box>
  );
}

export default Header;
