import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import DropMenu from "../../common/DropMenu";
import SearchBOx from "../../common/SearchBox";

function Header() {
  const options = ["Last 30 days", "Last Week", "Last Year"];
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading as="h3" fontSize="xl" marginBottom={{ base: 5, md: 0 }}>
        Product Sell
      </Heading>
      <HStack flexDir={{ base: "column", sm: "row" }}>
        <SearchBOx bgColor="whitesmoke" />
        <Box width={{ base: "100%", sm: "inherit" }}>
          <DropMenu menuItems={options} />
        </Box>
      </HStack>
    </Stack>
  );
}

export default Header;
