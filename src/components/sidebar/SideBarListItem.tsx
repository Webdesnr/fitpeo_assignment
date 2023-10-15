import { Icon, ListItem, Text, HStack, Flex, As } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  iconType: As;
  label: string;
  isActive: boolean;
  rightIcon?: As;
  onClick: () => void;
}

function SideBarListItem({
  iconType,
  label,
  isActive,
  rightIcon,
  onClick,
}: Props) {
  const [onHover, setHover] = useState(false);
  return (
    <ListItem
      color={{ base: "black", lg: "white" }}
      cursor="pointer"
      bg={isActive ? "blue.600" : onHover ? "blue.900" : ""}
      borderRadius="lg"
      padding=".7rem .6rem"
      marginBottom=".4rem"
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Flex
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
      >
        <HStack color={isActive ? "white" : ""}>
          <Icon as={iconType} fontSize="3xl" />
          <Text display={{ base: "none", lg: "block" }} fontWeight="medium">
            {label}
          </Text>
        </HStack>
        {rightIcon && (
          <Icon
            display={{ base: "none", lg: "block" }}
            as={rightIcon}
            fontSize="xl"
          />
        )}
      </Flex>
    </ListItem>
  );
}

export default SideBarListItem;
