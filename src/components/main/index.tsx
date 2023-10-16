import { Grid, GridItem } from "@chakra-ui/react";
import DashboardCards from "./dashboardCard";
import Header from "./header";
import ProductView from "./productView";
import StatView from "./statOverview";

function Main() {
  return (
    <Grid
      templateAreas={`"header" "cards" "report" "product"`}
      templateRows={"min-content min-content 1fr min-content"}
    >
      <GridItem
        area={"header"}
        position="sticky"
        top={0}
        zIndex="overlay"
        bg="whitesmoke"
        paddingX={{ base: "3", md: "5", lg: "10" }}
      >
        <Header />
      </GridItem>
      <GridItem area={"cards"} paddingX={{ base: "3", md: "5", lg: "10" }}>
        <DashboardCards />
      </GridItem>
      <GridItem
        area={"report"}
        paddingX={{ base: "3", md: "5", lg: "10" }}
        marginTop={{ base: 10 }}
      >
        <StatView />
      </GridItem>
      <GridItem
        area={"product"}
        marginTop={{ base: 10 }}
        paddingX={{ base: "3", md: "5", lg: "10" }}
      >
        <ProductView />
      </GridItem>
    </Grid>
  );
}

export default Main;
