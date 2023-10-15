import { ReactNode } from "react";
import { Box, HStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return <HStack justifyContent="center">{children}</HStack>;
}

export default Content;
