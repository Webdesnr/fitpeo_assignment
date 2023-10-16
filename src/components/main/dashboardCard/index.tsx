import { Box, SimpleGrid } from "@chakra-ui/react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import CardLayout from "./CardLayout";

function DashboardCards() {
  const cards = [
    {
      icon: {
        type: RiMoneyDollarCircleLine,
        color: "green",
        bgColor: "green.100",
      },
      label: "Earning",
      statNumber: "$199k",
      isProfit: true,
      text: "37.8% this month",
    },
    {
      icon: {
        type: CgNotes,
        color: "purple",
        bgColor: "purple.100",
      },
      label: "Orders",
      statNumber: "$2.4k",
      isProfit: false,
      text: "2% this month",
    },
    {
      icon: {
        type: MdOutlineAccountBalanceWallet,
        color: "blue",
        bgColor: "blue.100",
      },
      label: "Balance",
      statNumber: "$2.4k",
      isProfit: false,
      text: "2% this month",
    },
    {
      icon: {
        type: SlHandbag,
        color: "red",
        bgColor: "pink.100",
      },
      label: "Total Sales",
      statNumber: "$89k",
      isProfit: true,
      text: "11% this month",
    },
  ];
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, xl: 3, "2xl": 4 }}
      gap={{ base: 5, lg: 10 }}
    >
      {cards.map((card) => (
        <Box key={card.label}>
          <CardLayout
            cardIcon={card.icon}
            statLabel={card.label}
            statNumber={card.statNumber}
            statArrow={card.isProfit}
            highlight={card.text}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default DashboardCards;
