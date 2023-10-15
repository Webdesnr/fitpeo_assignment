import { ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function SideBar({ children }: Props) {
  return <VStack alignItems="left">{children}</VStack>;
}

export default SideBar;
