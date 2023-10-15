import { Box, SimpleGrid } from "@chakra-ui/react";
import BarProgress from "./barProgress";
import CircleProgress from "./circleProgress";

const StatView = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      templateColumns={{ lg: "1fr .5fr" }}
      gap={{ base: 3, lg: 10 }}
    >
      <BarProgress />
      <CircleProgress />
    </SimpleGrid>
  );
};

export default StatView;
