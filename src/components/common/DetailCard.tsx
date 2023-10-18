import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  avator: string;
  title: string;
  subTitle: string;
}

function DetailCard({ avator, title, subTitle }: Props) {
  return (
    <Stack direction="row" boxShadow="none" alignItems="center">
      <Image
        width={100}
        height={55}
        objectFit="cover"
        src={avator}
        alt="image"
        borderRadius="lg"
      />
      <VStack alignItems="flex-start">
        <Heading fontSize="md">{title}</Heading>
        <Text>{subTitle}</Text>
      </VStack>
    </Stack>
  );
}

export default DetailCard;
