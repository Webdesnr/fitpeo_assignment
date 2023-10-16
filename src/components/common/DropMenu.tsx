import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  label: string;
  menuItems: string[];
  onClick: (item: string) => void;
}

function DropMenu({ label, menuItems, onClick }: Props) {
  return (
    <Menu>
      <MenuButton
        fontSize={{ base: "sm", md: "lg" }}
        as={Button}
        color="gray"
        bg="whitesmoke"
        variant="solid"
        rightIcon={<ChevronDownIcon />}
      >
        {label}
      </MenuButton>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            onClick={() => onClick(item)}
            fontSize={{ base: "sm", md: "lg" }}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default DropMenu;
