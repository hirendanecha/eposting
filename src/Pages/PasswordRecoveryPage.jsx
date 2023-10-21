import React from "react";
import PublicLayout from "../Components/Layout/PublicLayout";
import passwordRecoveryImg from "../assets/pngs/passwordRecoveryImg.png";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import LoginWithSocial from "../Components/LoginWithSocial";

const PasswordRecovery = () => {
  return (
    <>
      <PublicLayout sideImage={passwordRecoveryImg}>
        <Box
          sx={{
            display: "inline-block",
            width: "100%",
            background: "white",
            borderRadius: "16px",
            h: "100%",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", p: "40px", mb: 9 }}
          >
            <Heading
              as="h3"
              sx={{
                mx: 0,
                mt: 0,
                mb: 9,
                fontWeight: 500,
                color: "#202020",
              }}
              fontSize={{ base: "32px", lg: "44px", xl: "56px" }}
            >
              Password Recovery
            </Heading>

            <Box sx={{ display: "flex", flexDirection: "column", w: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", mb: 6 }}>
                <Text sx={{ fontSize: "18px", color: "#4B4B4B", mb: 3 }}>
                  Email Address
                </Text>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" sx={{ h: "100%" }}>
                    <FiMail color="#4B4B4B" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="jhonsmith@mail.com"
                    sx={{
                      borderColor: "#4B4B4B",
                      borderRadius: "8px",
                      fontSize: "15px",
                      "input::placeholder": {
                        color: "#4B465C", // Change the color to your desired color
                      },
                    }}
                    size="lg"
                  />
                </InputGroup>
              </Box>

              <Text sx={{ fontSize: "15px", color: "#4B465C", mb: 9 }}>
                An email wil be sent to your provided address for next step in
                password recovery
              </Text>

              <Box sx={{ display: "inline-block", width: "100%", mb: 8 }}>
                <Button
                  sx={{
                    background: "#7367F0",
                    color: "white",
                    w: "100%",
                  }}
                >
                  Recover Password
                </Button>
              </Box>

              <Text
                sx={{
                  fontSize: "15px",
                  color: "#4B4B4B",
                  display: "flex",
                  gap: "3px",
                  justifyContent: "center",
                  mb: 8,
                  fontWeight: 600,
                }}
              >
                Didn’t received link?{" "}
                <Button
                  sx={{ color: "#EA5455", fontSize: "15px", fontWeight: 600 }}
                  variant="link"
                >
                  Resend Email
                </Button>
              </Text>

              <LoginWithSocial />
            </Box>
          </Box>
        </Box>
      </PublicLayout>
    </>
  );
};

export default PasswordRecovery;
