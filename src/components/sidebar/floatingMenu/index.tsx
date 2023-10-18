import { Box } from "@chakra-ui/react";
import ColleagueMenu from "./ColleagueMenu";

function FloatingMenu() {
  return (
    <Box marginTop={{ base: 5, lg: 20 }} zIndex="overlay">
      <ColleagueMenu />
    </Box>
  );
}

export default FloatingMenu;
