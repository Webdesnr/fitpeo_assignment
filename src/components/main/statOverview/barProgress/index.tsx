import { Box } from "@chakra-ui/react";
import Content from "./Content";
import Header from "./Header";
import StatBar from "./statBar";

function BarProgress() {
  const stats = [
    { month: "Jan", percentage: 50 },
    { month: "Feb", percentage: 40 },
    { month: "Mar", percentage: 100 },
    { month: "Apr", percentage: 60 },
    { month: "May", percentage: 70 },
    { month: "Jun", percentage: 30 },
    { month: "Jul", percentage: 70 },
    { month: "Aug", percentage: 100 },
    { month: "Sep", percentage: 90 },
    { month: "Oct", percentage: 80 },
    { month: "Nov", percentage: 60 },
    { month: "Dec", percentage: 70 },
  ];
  const currentDate = stats[new Date().getMonth()].month;

  return (
    <Box
      bg="white"
      borderRadius="lg"
      paddingX={{ base: 3, sm: 5, md: 10 }}
      paddingY={{ base: 5 }}
      minWidth="100%"
    >
      <Header />
      <Box marginTop={{ base: 10 }}>
        <Content>
          {stats.map(({ month, percentage }) => (
            <StatBar
              key={month}
              label={month}
              progressValue={percentage}
              isActive={currentDate === month}
            />
          ))}
        </Content>
      </Box>
    </Box>
  );
}

export default BarProgress;
