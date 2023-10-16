import { ReactNode } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return <SimpleGrid marginTop="5">{children}</SimpleGrid>;
}

export default Content;
