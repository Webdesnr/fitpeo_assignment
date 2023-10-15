import { Heading, Icon, Text, HStack } from "@chakra-ui/react";
import { LuHexagon } from "react-icons/lu";

function SideBarHeading() {
  return (
    <Heading
      as="h4"
      fontSize="3xl"
      fontWeight="medium"
      marginY={{ base: "1rem", lg: "2rem" }}
      color={{ base: "blue.700", lg: "white" }}
    >
      <HStack justifyContent={{ base: "center", lg: "flex-start" }}>
        <Icon as={LuHexagon} fontSize="2.8rem" />
        <Text display={{ base: "none", lg: "block" }}>Dashboard</Text>
      </HStack>
    </Heading>
  );
}

export default SideBarHeading;
