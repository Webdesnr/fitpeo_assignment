import { useState } from "react";

import { Heading, HStack, Stack } from "@chakra-ui/react";
import DropMenu from "../../common/DropMenu";
import SearchBOx from "../../common/SearchBox";

function Header() {
  const [selectedItem, setSelectedItem] = useState("Last 30 Days");
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
        <DropMenu
          label={selectedItem}
          menuItems={options}
          onClick={(item: string) => setSelectedItem(item)}
        />
      </HStack>
    </Stack>
  );
}

export default Header;
