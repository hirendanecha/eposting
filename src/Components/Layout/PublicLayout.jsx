import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const PublicLayout = ({ sideImage, children }) => {
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          background: "#7367F0",
        }}
        minHeight={{ base: "auto", md: "100vh" }}
      >
        <Box
          sx={{
            display: "inline-block",
            width: "100%",
            my: "29px",
          }}
          h={{ base: "auto", md: "calc(100vh - 58px)" }}
        >
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={4}
            sx={{ height: "100%" }}
          >
            <GridItem
              colStart={{ base: 1 }}
              colEnd={{ base: 12, lg: 6 }}
              sx={{ ms: "48px", h: "100%" }}
            >
              {children && children}
            </GridItem>
            <GridItem
              colStart={{ base: 0, md: 6 }}
              colEnd={{ base: 0, lg: 13 }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  h: "100%",
                }}
                display={{ base: "none", lg: "flex" }}
              >
                {sideImage && (
                  <Image src={sideImage} alt="signInImg" objectFit="contain" />
                )}
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PublicLayout;
