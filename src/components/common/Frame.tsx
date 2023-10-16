import { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Frame({ children }: Props) {
  return (
    <Box
      paddingY={{ base: 5 }}
      paddingX={{ base: 3, sm: 5, md: 10 }}
      bg="white"
      borderRadius="lg"
      minWidth="fit-content"
    >
      {children}
    </Box>
  );
}

export default Frame;
