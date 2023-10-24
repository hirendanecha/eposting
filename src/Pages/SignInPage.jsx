import React,{useState} from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import signInImg from "../assets/pngs/signInImg.png";
import PublicLayout from "../Components/Layout/PublicLayout";
import LoginWithSocial from "../Components/LoginWithSocial";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <PublicLayout sideImage={signInImg}>
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
            Sign in
          </Heading>

          <Box sx={{ display: "flex", gap: "8px", mb: 9 }}>
            <Text sx={{ fontSize: "18px", color: "#202020" }}>New user?</Text>
            <Text
              sx={{ fontSize: "18px", color: "#7367F0", cursor: "pointer" }}
            >
              
              <Link to="/signup">
              Create an acount
              </Link>
            </Text>
          </Box>

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

            <Box sx={{ display: "flex", flexDirection: "column", mb: 8 }}>
              <Text sx={{ fontSize: "18px", color: "#4B4B4B", mb: 3 }}>
                Password
              </Text>
              <InputGroup>
                <Input
                   type={showPassword ? "text" : "password"}
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

               <InputRightElement cursor={"pointer"} sx={{ h: "100%" }}>
                {showPassword ? (
            <FiEyeOff color="#4B4B4B" onClick={togglePasswordVisibility} />
          ) : (
            <FiEye color="#4B4B4B" onClick={togglePasswordVisibility} />
          )}
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box sx={{ display: "inline-block", width: "100%", mb: 5 }}>
              <Button
                sx={{
                  background: "#7367F0",
                  color: "white",
                  w: "100%",
                }}
              >
                Sign In
              </Button>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
              <Button
                sx={{ color: "#EA5455", fontSize: "15px", fontWeight: 600 }}
                variant="link"
              >
                Forgot password?
              </Button>
            </Box>

            <LoginWithSocial />
          </Box>
        </Box>
      </Box>
    </PublicLayout>
  );
};

export default SignInPage;
