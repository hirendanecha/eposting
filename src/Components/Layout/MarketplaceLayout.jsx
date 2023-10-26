import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import LeftComponent from '../LeftComponent';
import RightComponent from '../RightComponent';
import HomePage from "../../Pages/HomePage";

const MarketplaceLayout = ({ children }) => {
  return (
    <>
      <HomePage />
      <Box px={6} pt={"118px"} sx={{ background: "#F8F7FA", minHeight: "100vh" }}>
        <Grid templateColumns={{ base: '1fr', lg: '400px 1fr 400px' }} gap={4}>
          <GridItem>
            <LeftComponent />
          </GridItem>

          <GridItem>
            {children}
          </GridItem>
          <GridItem >
            <RightComponent />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default MarketplaceLayout;
