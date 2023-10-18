import { Box, Grid, GridItem } from "@chakra-ui/react";
import FloatingMenu from "./components/sidebar/floatingMenu";
import Main from "./components/main";
import SideBar from "./components/sidebar";
import SideBarHeading from "./components/sidebar/SideBarHeading";
import SideBarList from "./components/sidebar/SideBarList";

function App() {
  return (
    <Grid
      templateAreas={`"sideBar main"`}
      templateColumns={{ base: "3.5rem 1fr", lg: "20rem 1fr" }}
    >
      <GridItem
        area={"sideBar"}
        bg={{ base: "transparent", lg: "blue.900" }}
        paddingX={{ base: "1", lg: "5" }}
      >
        <Box position="sticky" top="0">
          <SideBar>
            <SideBarHeading />
            <SideBarList />
            <FloatingMenu />
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
