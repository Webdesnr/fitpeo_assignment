import { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Content({ children }: Props) {
  return <HStack justifyContent="center">{children}</HStack>;
}

export default Content;
