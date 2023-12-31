import {
  As,
  Flex,
  Highlight,
  HStack,
  Icon,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";

type Icon = { type: As; color: string; bgColor: string };

interface Props {
  cardIcon: Icon;
  statLabel: string;
  statNumber: string;
  statArrow: boolean;
  highlight: string;
}

function CardLayout({
  cardIcon: { type, color, bgColor },
  statLabel,
  statNumber,
  statArrow,
  highlight,
}: Props) {
  return (
    <Stack
      direction="row"
      padding={{ base: "3", md: "4", lg: "3", xl: "3.5" }}
      alignItems="center"
      bg="white"
      borderRadius="lg"
    >
      <HStack>
        <Flex
          borderRadius={{ base: "2xl", md: "full" }}
          bg={bgColor}
          padding={{ base: "4", md: 8, lg: "5", xl: "6" }}
        >
          <Icon
            as={type}
            fontWeight="light"
            fontSize={{ base: "5xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            color={color}
          />
        </Flex>
        <VStack
          alignSelf="flex-start"
          paddingX={{ base: 3 }}
          paddingY={{ base: 0 }}
        >
          <StatGroup>
            <Stat>
              <StatLabel
                color="grey"
                fontSize={{ base: 12, md: "13", lg: "12", xl: "14" }}
              >
                {statLabel}
              </StatLabel>
              <StatNumber
                fontWeight="bold"
                fontSize={{ base: 20, md: 22, lg: "24", xl: "26" }}
              >
                {statNumber}
              </StatNumber>
              <StatHelpText
                fontSize={{ base: 12, md: "13", lg: "12", xl: "14" }}
              >
                <StatArrow type={statArrow ? "increase" : "decrease"} />
                <Highlight query="37.8%" styles={{ color: "green" }}>
                  {highlight}
                </Highlight>
              </StatHelpText>
            </Stat>
          </StatGroup>
        </VStack>
      </HStack>
    </Stack>
  );
}

export default CardLayout;
