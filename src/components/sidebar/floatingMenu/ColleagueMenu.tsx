import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";
import profileImg from "../../../assets/proman.jpg";

function ColleagueMenu() {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <Button
          colorScheme="blackAlpha"
          as={Button}
          variant={{ base: "unstyled", lg: "solid" }}
          rightIcon={
            <ChevronDownIcon
              fontSize="2xl"
              color="gray"
              display={{ base: "none", lg: "block" }}
            />
          }
          width="100%"
          paddingY={{ base: "2rem" }}
        >
          <Flex alignItems="center" width="100%">
            <Image
              src={profileImg}
              objectFit="cover"
              boxSize="3rem"
              alt="colleagueProfile"
              borderRadius="full"
              boxShadow={{ base: "dark-lg" }}
            />
            <Box
              textAlign="left"
              marginLeft="5"
              display={{ base: "none", lg: "block" }}
            >
              <Heading as="h5" fontSize={{ xl: "lg" }}>
                Evano
              </Heading>
              <Text color="gray" fontSize="sm">
                Project Manager
              </Text>
            </Box>
          </Flex>
        </Button>
      </PopoverTrigger>
      {/* <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text>
            Profile
            <Badge marginLeft="1" colorScheme="green">
              Online
            </Badge>
          </Text>
        </PopoverHeader>
        <PopoverBody>
          <HStack>
            <Text>Evano</Text>
            <Text
              border="1px solid"
              borderColor="gray.100"
              width="100%"
              borderRadius="lg"
              padding={".3rem .5rem"}
            >
              Hi,
            </Text>
          </HStack>
          <HStack flexDir="row-reverse" marginTop="2">
            <Text>Me</Text>
            <Text
              border="1px solid"
              borderColor="gray.100"
              width="100%"
              borderRadius="lg"
              padding={".3rem .5rem"}
            >
              Hi,Sir
            </Text>
          </HStack>
        </PopoverBody>
        <PopoverFooter>
          <HStack>
            <Input />
            <Button>
              <Icon as={BsSend} />
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent> */}
    </Popover>
  );
}

export default ColleagueMenu;
