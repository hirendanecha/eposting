import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GoogleSvg from "../assets/svgs/GoogleSvg";
import metaIcon from "../assets/pngs/metaIcon.png";
import LinkedInSvg from "../assets/svgs/LinkedInSvg";
import MicrosoftSvg from "../assets/svgs/MicrosoftSvg";

const LoginWithSocial = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          w: "100%",
          justifyContent: "center",
          mb: 9,
          position: "relative",
          ":before": {
            position: "absolute",
            content: "''",
            left: 0,
            top: 0,
            bottom: 0,
            h: "1px",
            w: "33%",
            background: "#A8AAAE",
            margin: "auto",
          },
          ":after": {
            position: "absolute",
            content: "''",
            right: 0,
            top: 0,
            bottom: 0,
            h: "1px",
            w: "33%",
            background: "#A8AAAE",
            margin: "auto",
          },
        }}
      >
        <Text
          sx={{
            // w: "100%",
            display: "flex",
            justifyContent: "center",
            color: "#4B465C",
          }}
        >
          or Just Sign in using
        </Text>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2, "2xl": 4 }}
        spacing={6}
        sx={{ mb: 10 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #A8AAAE",
            borderRadius: "8px",
            minH: "48px",
            w: "100%",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <GoogleSvg />
            <Text sx={{ fontSize: "13px", fontWeight: 600 }}>Google</Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #A8AAAE",
            borderRadius: "8px",
            minH: "48px",
            w: "100%",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Image objectFit="contain" src={metaIcon} alt="metaIcon" />
            <Text sx={{ fontSize: "13px", fontWeight: 600 }}>Meta</Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #A8AAAE",
            borderRadius: "8px",
            minH: "48px",
            w: "100%",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <LinkedInSvg />
            <Text sx={{ fontSize: "13px", fontWeight: 600 }}>LinkedIn</Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #A8AAAE",
            borderRadius: "8px",
            minH: "48px",
            w: "100%",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <MicrosoftSvg />
            <Text sx={{ fontSize: "13px", fontWeight: 600 }}>Microsoft</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Box sx={{ display: "flex" }}>
        <Text
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            display: "flex",
            gap: "3px",
            flexWrap: "wrap",
          }}
        >
          Protected by reCAPTCHA and subject to the
          <Text sx={{ color: "#7367F0" }}>ePosting Privacy Policy</Text>
          and
          <Text sx={{ color: "#7367F0" }}> Terms of Service.</Text>
        </Text>
      </Box>
    </>
  );
};

export default LoginWithSocial;
