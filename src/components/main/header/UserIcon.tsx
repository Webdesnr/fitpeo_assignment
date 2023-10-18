import {
  Box,
  Button,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { PiHandWavingFill } from "react-icons/pi";

function UserIcon() {
  return (
    <Box display={{ base: "block", sm: "none" }}>
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <IconButton
            aria-label="User Account"
            variant="unstyled"
            icon={<Icon as={BiUserCircle} fontSize="4xl" color="gray" />}
          />
        </PopoverTrigger>
        <PopoverContent maxWidth={{ base: "40" }} textAlign="center">
          <PopoverArrow />
          <PopoverHeader>Account</PopoverHeader>
          <PopoverBody>
            Shahrukh
            <Icon as={PiHandWavingFill} color="#DCB899" fontSize="2xl" />,
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default UserIcon;
