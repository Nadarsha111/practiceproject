import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Sidenav from "../../components/Sidenav";
import TopNav from "../../components/TopNav";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import { CustomCard } from "../../chakra/CustomCard";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dash Board">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan="2">
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan="1">
          <PriceSection />
        </GridItem>
        <GridItem colSpan="1">
<TransactionSection/>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
