import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
} from "@chakra-ui/react";

function Progress() {
  return (
    <Box
      position="relative"
      marginTop={10}
      rounded="full"
      boxShadow="base"
      padding={5}
    >
      <CircularProgress
        position="absolute"
        size="190px"
        color="gray"
        thickness="15"
        left="50%"
        transform={"translateX(-50%)"}
      >
        <CircularProgressLabel>
          <Heading as="h4" fontSize={{ xl: "3xl" }}>
            65%
          </Heading>
          <Text fontSize={{ xl: "2xs" }}>Total New Customers</Text>
        </CircularProgressLabel>
      </CircularProgress>
      <CircularProgress
        position="absolute"
        size="190px"
        color={"purple.500"}
        trackColor="transparent"
        thickness="20"
        left="50%"
        transform={"translateX(-50%)"}
        value={60}
      />
      <CircularProgress
        size="190px"
        color="pink.300"
        trackColor="transparent"
        thickness="25"
        left="50%"
        transform={"translateX(-50%)"}
        value={20}
      />
    </Box>
  );
}

export default Progress;
