import { Box } from "@chakra-ui/react";
import Content from "./Content";
import Header from "./Header";
import Progress from "./Progress";

function CircleProgress() {
  return (
    <Box
      paddingY={{ base: 5 }}
      paddingX={{ base: 3, sm: 5, md: 10 }}
      bg="white"
      borderRadius="lg"
    >
      <Header />
      <Content>
        <Progress />
      </Content>
    </Box>
  );
}

export default CircleProgress;
