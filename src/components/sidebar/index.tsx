import { ReactNode } from "react";
import { Box, VStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function SideBar({ children }: Props) {
  return <Box>{children}</Box>;
}

export default SideBar;
