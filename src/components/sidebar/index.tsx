import { ReactNode } from "react";
import { Flex, Stack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function SideBar({ children }: Props) {
  return <Stack>{children}</Stack>;
}

export default SideBar;
