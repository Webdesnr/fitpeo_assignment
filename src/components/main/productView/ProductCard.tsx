import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  avator: string;
  title: string;
  subTitle: string;
}

function ProductCard({ avator, title, subTitle }: Props) {
  return (
    <Card
      direction="row"
      overflow="hidden"
      variant="elevated"
      boxShadow="none"
      alignItems="center"
    >
      <Image
        width={100}
        height={55}
        objectFit="cover"
        src={avator}
        alt="Products"
        borderRadius="lg"
      />
      <Stack>
        <CardBody>
          <Heading fontSize="md">{title}</Heading>
          <Text>{subTitle}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default ProductCard;
