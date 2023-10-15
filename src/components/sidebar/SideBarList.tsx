import { List } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { TbSquareKey, TbUserSquareRounded, TbDiscount2 } from "react-icons/tb";
import { BsFillBoxFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineLiveHelp } from "react-icons/md";
import SideBarListItem from "./SideBarListItem";
import { useState } from "react";

function SideBarList() {
  const listItems = [
    { icon: TbSquareKey, label: "Dashboard" },
    { icon: BsFillBoxFill, label: "Products" },
    { icon: TbUserSquareRounded, label: "Customers" },
    { icon: FaMoneyBillTrendUp, label: "Income" },
    { icon: TbDiscount2, label: "Promote" },
    { icon: MdOutlineLiveHelp, label: "Help" },
  ];

  const [current, setcurrent] = useState(0);
  return (
    <List>
      {listItems.map(({ icon, label }, index) =>
        index === 0 ? (
          <SideBarListItem
            key={index}
            iconType={icon}
            label={label}
            isActive={index === current}
            onClick={() => setcurrent(index)}
          />
        ) : (
          <SideBarListItem
            key={index}
            iconType={icon}
            label={label}
            isActive={index === current}
            rightIcon={ChevronRightIcon}
            onClick={() => setcurrent(index)}
          />
        ),
      )}
    </List>
  );
}

export default SideBarList;
