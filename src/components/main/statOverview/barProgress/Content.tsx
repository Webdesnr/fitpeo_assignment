import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return (
    <Box overflow="auto">
      <Flex justifyContent="space-between" minWidth={500}>
        {children}
      </Flex>
      ;
    </Box>
  );
}

export default Content;
