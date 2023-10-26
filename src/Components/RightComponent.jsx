import { Avatar, Box, Button, Checkbox, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Profile from "../assets/pngs/PP1.png";
import StarSvg from '../assets/svgs/StarSvg';
import EyeSvg from '../assets/svgs/EyeSvg';

const RightComponent = () => {
  return (
    <Box overflowY={{ lg: 'auto'}}  position={"sticky"} top={"118px"}  h={{ base:"auto", lg: "calc(100vh - 118px)"}} sx={{
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent', 
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&::-webkit-scrollbar-button': {
          display: 'none', 
        }, }}>
                <Box bg={"white"} h={612} sx={{ borderRadius: "8px 8px 0px 0px" }}>
                  <Box sx={{ borderRadius: "8px" }} bg="rgb(115,104,231)">
                    <Box
                      h={120}
                      style={{
                        background:
                          "linear-gradient(rgba(122, 122, 135, 0.0001), rgba(23, 23, 37, 1))",
                      }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "12px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "-60px",
                      textAlign: "center",
                    }}
                  >
                    <Box position={"relative"}>
                      <Avatar
                        border={"4px solid white"}
                        size={"120px"}
                        name="Nina Jhon"
                        src={Profile}
                      >
                      </Avatar>
                      <Box width={"18px"} height={"18px"} borderRadius={"100%"} position={"absolute"} top={"100px"} left={"91px"} background={"#28C76F"}>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
                      <Text fontSize={22} fontWeight={600}>
                        William Zhun
                        <br />
                        <Text
                          fontSize={15}
                          fontWeight={600}
                          color={"#44444F"}
                          mt={1}
                        >
                          Staff Member ePosting <br />
                          San Francisco
                        </Text>
                      </Text>
                      <Stack direction={"row"}>
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                        <StarSvg />
                      </Stack>
                    </Box>
                    <Box h={"264px"} width={"100%"} gap={"12px"}>
                      <Box
                        px={"16px"}
                        py={"20px"}
                        width={"100%"}
                        background="rgba(115, 103, 240, 0.08)"
                      >
                        <Text
                          textAlign={"left"}
                          fontSize={13}
                          mb={"8px"}
                          fontWeight={600}
                        >
                          Profile Completeness
                        </Text>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          textAlign={"right"}
                          alignItems={"center"}
                          width={"100%"}
                          justifyContent={"space-between"}
                        >
                          <Progress
                            width={"100%"}
                            mr={2}
                            flexGrow={1}
                            background={"#E3E1FC"}
                            value={45}
                            height={"4px"}
                            colorScheme="purple"
                          />
                          <Box display={"flex"} justifyContent={"space-around"}>
                            <Box>45%</Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box px={"20px"} mx={"8px"} py={"10px"} h={"184px"}>
                        <Stack spacing={2} direction="column">
                        <Checkbox variant="circular" colorScheme="purple"  onChange={(e) => {
                              if (e.target.checked) {
                                e.target.parentElement.style.color = "#7367F0";
                                e.target.parentElement.style.fontWeight = 700;
                              } else {
                                e.target.parentElement.style.color = "";
                                e.target.parentElement.style.fontWeight = 400; // Reset to default text color
                              }
            }}>
                           Submit a Job Interest
                        </Checkbox>
                          <hr />    
                          <Checkbox variant="circular"  onChange={(e) => {
                                 if (e.target.checked) {
                                   e.target.parentElement.style.color = "#7367F0";
                                   e.target.parentElement.style.fontWeight = 700;
                                 } else {
                                   e.target.parentElement.style.color = "";
                                   e.target.parentElement.style.fontWeight = 400; // Reset to default text color
                                 }
                               }} colorScheme="purple">
                                               Add Skills to Profile
                          </Checkbox>
                          <hr />
                          <Checkbox  variant="circular" onChange={(e) => {
                                     if (e.target.checked) {
                                       e.target.parentElement.style.color = "#7367F0";
                                       e.target.parentElement.style.fontWeight = 700;
                                     } else {
                                       e.target.parentElement.style.color = "";
                                       e.target.parentElement.style.fontWeight = 400; // Reset to default text color
                                     }
                                   }} colorScheme="purple">
                                                   Add Experience
                          </Checkbox>{" "}
                          <hr />
                          <Checkbox  variant="circular" onChange={(e) => {
                                     if (e.target.checked) {
                                       e.target.parentElement.style.color = "#7367F0";
                                       e.target.parentElement.style.fontWeight = 700;
                                     } else {
                                       e.target.parentElement.style.color = ""; 
                                       e.target.parentElement.style.fontWeight = 400;// Reset to default text color
                                     }
                                   }} colorScheme="purple">
                                                   Find Network Connections
                          </Checkbox>{" "}
                          <hr />
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    h: "406px",
                    background: "#ffffff",
                    borderRadius: "8px",
                    mt: "32px"
                  }}
                  style={{ padding: "0px, 0px, 10px, 0px" }}
                >
                  <Box
                    as="H5"
                    color="#4B4B4B"
                    py={"14px"}
                    px={"18px"}
                    fontWeight={600}
                    fontSize={"18px"}
                  >
                    My Posted Jobs
                  </Box>
                  <hr />
                  <Box>
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="Google"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="R"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"} >
                            Need Java Developer at workday
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Remote Company
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="G"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="R"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mb={1}
                      h={"60px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        background={"#E9E7FD"}
                        gap={2}
                        borderRadius={"6px"}
                        h={"40px"}
                        width={"100%"}
                        color="#7367F0"
                        variant="outline"
                      >
                        <EyeSvg /> View More
                      </Button>
                    </Box>
                    <hr />
                  </Box>
                </Box>
                <Box
                  sx={{
                    h: "406px",
                    background: "#ffffff",
                    borderRadius: "8px",
                    mt: "32px",
                  }}
                  style={{ padding: "0px, 0px, 10px, 0px" }}
                >
                  <Box
                     as="H5"
                     color="#4B4B4B"
                     py={"14px"}
                     px={"18px"}
                     fontWeight={600}
                     fontSize={"18px"}
                  >
                    My Saved Jobs
                  </Box>
                  <hr />
                  <Box>
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="Google"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="R"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            Need Java Developer at workday
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Remote Company
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="G"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mt={1}
                      h={"68px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction="row" display={"flex"} gap={"12px"}>
                        <Avatar
                          bg="#7367F0"
                          name="R"
                          src="https://bit.ly/broken-link"
                        />
                        <Stack direction="column" gap={"4px"}>
                          <Text fontSize="13px" fontWeight={700} color={"#4B4B4B"}>
                            PM role at Google for 1 year in ABD Group
                          </Text>
                          <Text color={"#4B465C"} fontSize="13px" fontWeight={400}>
                            <Box as="span" fontWeight={700}>
                              Comapny:
                            </Box>{" "}
                            Google
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                    <hr />
                    <Box
                      mb={1}
                      h={"60px"}
                      px={"20px"}
                      py={"10px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        background={"#E9E7FD"}
                        gap={2}
                        borderRadius={"6px"}
                        h={"40px"}
                        width={"100%"}
                        color="#7367F0"
                        variant="outline"
                      >
                        <EyeSvg /> View More
                      </Button>
                    </Box>
                    <hr />
                  </Box>
                </Box>
                </Box>
  )
}

export default RightComponent