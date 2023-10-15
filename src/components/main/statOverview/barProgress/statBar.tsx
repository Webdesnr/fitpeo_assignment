import { Box, Text, VStack } from "@chakra-ui/react";

interface Props {
  progressValue: number;
  label: string;
  isActive: boolean;
}

function StatBar({ label, progressValue, isActive }: Props) {
  return (
    <VStack
      marginY={{ xl: 4 }}
      justifyContent="flex-end"
      alignItems="center"
      height="200px"
    >
      <Box
        width={{ base: 5, md: 8 }}
        height={progressValue + "%"}
        bg={isActive ? "blue.700" : "gray.100"}
        borderRadius="xl"
      ></Box>
      <Text color="gray" fontWeight="bold">
        {label}
      </Text>
    </VStack>
  );
}

export default StatBar;
