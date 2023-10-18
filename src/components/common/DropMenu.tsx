import { Select } from "@chakra-ui/react";

interface Props {
  menuItems: string[];
}

function DropMenu({ menuItems }: Props) {
  return (
    <Select
      bg="whitesmoke"
      color="gray"
      borderColor="transparent"
      cursor="pointer"
      _focusVisible={{ outline: "none" }}
    >
      {menuItems.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

export default DropMenu;
