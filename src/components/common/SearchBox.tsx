import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Props {
  bgColor?: string;
}

function SearchBOx({ bgColor = "default" }: Props) {
  return (
    <InputGroup width={{ base: "auto" }}>
      <InputLeftElement>
        <Search2Icon color="GrayText" />
      </InputLeftElement>
      <Input placeholder="Search" bg={bgColor} border="none" />
    </InputGroup>
  );
}

export default SearchBOx;
