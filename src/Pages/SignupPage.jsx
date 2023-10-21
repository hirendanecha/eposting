import React from "react";
import singupImg from "../assets/pngs/singupImg.png";
import PublicLayout from "../Components/Layout/PublicLayout";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FiEye, FiMail } from "react-icons/fi";
import LoginWithSocial from "../Components/LoginWithSocial";

const SignupPage = () => {
  return (
    <PublicLayout sideImage={singupImg}>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          background: "white",
          borderRadius: "16px",
          h: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", p: "40px" }}>
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
            Sign up for an Account
          </Heading>

          <Box sx={{ display: "flex", gap: "8px", mb: 9 }}>
            <Text sx={{ fontSize: "18px", color: "#202020" }}>
              Already have a ePosting account?{" "}
            </Text>
            <Text
              sx={{ fontSize: "18px", color: "#7367F0", cursor: "pointer" }}
            >
              Sign in
            </Text>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", w: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
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

            <Text
              sx={{ fontSize: "15px", color: "#4B465C", opacity: 0.5, mb: 6 }}
            >
              *We will not share or sell address to any third parties.
            </Text>

            <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
              <Text sx={{ fontSize: "18px", color: "#4B4B4B", mb: 3 }}>
                Password
              </Text>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Password"
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

                <InputRightElement sx={{ h: "100%" }}>
                  <FiEye color="#4B4B4B" />
                </InputRightElement>
              </InputGroup>
            </Box>

            <Text
              sx={{ fontSize: "15px", color: "#4B465C", opacity: 0.5, mb: 8 }}
            >
              *Min of 8 charaters or numbers including one upper and one special
            </Text>

            <Box sx={{ display: "inline-block", width: "100%", mb: 5 }}>
              <Button
                sx={{
                  background: "#7367F0",
                  color: "white",
                  w: "100%",
                }}
              >
                Create an Account
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 8 }}
            >
              <Checkbox defaultChecked sx={{ mt: 1 }} />

              <Box sx={{ display: "flex" }}>
                <Text
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                    display: "flex",
                    gap: "3px",
                    flexWrap: "wrap",
                    color: "#84818A",
                  }}
                >
                  By clicking Create account, I agree that I have read and
                  accepted the
                  <Text sx={{ color: "#7367F0" }}>Terms of Use</Text>
                  and
                  <Text sx={{ color: "#7367F0" }}>Privacy Policy.</Text>
                </Text>
              </Box>
            </Box>

            <LoginWithSocial />
          </Box>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default SignupPage;
