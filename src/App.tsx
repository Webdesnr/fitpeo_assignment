import { Box, Grid, GridItem } from "@chakra-ui/react";
import Main from "./components/main";
import SideBar from "./components/sidebar";
import SideBarHeading from "./components/sidebar/SideBarHeading";
import SideBarList from "./components/sidebar/SideBarList";

function App() {
  return (
    <Grid
      templateAreas={{ base: '"sideBar main"' }}
      templateColumns={{ base: "3.5rem 1fr", lg: "17rem 1fr" }}
    >
      <GridItem
        area={"sideBar"}
        bg={{ base: "default", lg: "blue.700" }}
        paddingX={{ base: "1", lg: "5" }}
      >
        <Box position="fixed">
          <SideBar>
            <SideBarHeading />
            <SideBarList />
          </SideBar>
        </Box>
      </GridItem>
      <GridItem area={"main"} bg="whitesmoke">
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
