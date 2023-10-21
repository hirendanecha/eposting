import React, { useState } from "react";
import {
  Box,
  GridItem,
  Grid,
  Heading,
  Stack,
  Avatar,
  Text,
  Button,
  AvatarBadge,
  Progress,
  Image,
  Badge,
  Checkbox,
} from "@chakra-ui/react";
import HomePage from "../Pages/HomePage";
import avtar from "../assets/pngs/Avatar.png";
import avtar1 from "../assets/pngs/Avatar (1).png";
import avtar2 from "../assets/pngs/Avatar (2).png";
import avtar3 from "../assets/pngs/Avatar (3).png";
import GoogleLogo from "../assets/pngs/GoogleLogo.png"
import UpPng from "../assets/pngs/UpTechPng.png"
import Ace from "../assets/pngs/Ace.png";
import Profile from "../assets/pngs/PP1.png";
import CourseraPng from "../assets/pngs/CourseraPng.png";
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPencil } from 'react-icons/tb';
import StarSvg from "../assets/svgs/StarSvg";

import EyeSvg from "../assets/svgs/EyeSvg";


function ResourceMarketplace() {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedOne, setisExpandedOne] = useState(false);
  const [isExpandedTwo, setisExpandedTwo] = useState(false);
  const [isExpandedThree, setisExpandedThree] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleExpansionOne = () => {
    setisExpandedOne(!isExpandedOne);
  };
  const toggleExpansionTwo = () => {
    setisExpandedTwo(!isExpandedTwo);
  };
  const toggleExpansionThree = () => {
    setisExpandedThree(!isExpandedThree);
  };
  return (
    <>
      <HomePage />
      <Box p={6} sx={{ background: "#F8F7FA", minH:"100vh" }}>
        <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: '400px 1fr 400px' }} gap={4}>
          <GridItem>
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: "8px",
                mb: "32px",
              }}
              style={{ padding: "0px, 0px, 10px, 0px" }}
            >
              <Box
                as="H5"
                color="#4B4B4B"
                py={"14px"}
                px={"18px"}
                fontWeight={400}
                fontSize={"18px"}
              >
                Followed Companies
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
                    <Stack direction="column">
                      <Text fontSize="13px" fontWeight={700}>
                        Adobe{" "}
                      </Text>
                      <Text fontSize="13px" fontWeight={400}>
                        Tech Company{" "}
                      </Text>
                    </Stack>
                  </Stack>
                  <Button colorScheme="purple" variant="outline">
                    Followed
                  </Button>
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
                      name="A"
                      src="https://bit.ly/broken-link"
                    />
                    <Stack direction="column">
                      <Text fontSize="13px" fontWeight={700}>
                        Google{" "}
                      </Text>
                      <Text fontSize="13px" fontWeight={400}>
                        Tech Company{" "}
                      </Text>
                    </Stack>
                  </Stack>
                  <Button colorScheme="purple" variant="outline">
                    Followed
                  </Button>
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
                      name="Y"
                      src="https://bit.ly/broken-link"
                    />
                    <Stack direction="column">
                      <Text fontSize="13px" fontWeight={700}>
                        Meta{" "}
                      </Text>
                      <Text fontSize="13px" fontWeight={400}>
                        Tech Company{" "}
                      </Text>
                    </Stack>
                  </Stack>
                  <Button colorScheme="purple" variant="outline">
                    Followed
                  </Button>
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
                      name="Google"
                      src="https://bit.ly/broken-link"
                    />
                    <Stack direction="column">
                      <Text fontSize="13px" fontWeight={700}>
                        Tesla{" "}
                      </Text>
                      <Text fontSize="13px" fontWeight={400}>
                        Tech Company{" "}
                      </Text>
                    </Stack>
                  </Stack>
                  <Button colorScheme="purple" variant="outline">
                    Followed
                  </Button>
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
              sx={{ h: "360px", background: "#ffffff", borderRadius: 8, mb: 2 }}
              style={{ padding: "0px, 0px, 10px, 0px" }}
            >
              <Box
                as="H5"
                color="#4B4B4B"
                py={"14px"}
                fontSize={"18px"}
                px={"18px"}
                fontWeight={400}
              >
                List of New Connect Requests
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
                  <Avatar name="Dan Abrahmov" src={avtar}>
                    <AvatarBadge boxSize="1em" bg="gray.400" />
                  </Avatar>
                  <Stack direction="column">
                    <Text
                      fontSize="13px"
                      lineHeight={"14px"}
                      color={"#4B4B4B"}
                      fontWeight={600}
                    >
                      Jana Adams
                      <Text
                        fontSize="13px"
                        mt={1}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        Senior BSA
                      </Text>
                      <Text
                        fontSize="13px"
                        mt={"5px"}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        New Job Posting
                      </Text>
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
                  <Avatar name="Abhi Kumarv" src={avtar1}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                  <Stack direction="column">
                    <Text
                      fontSize="13px"
                      lineHeight={"14px"}
                      color={"#4B4B4B"}
                      fontWeight={600}
                    >
                      Abhi Kumar
                      <Text
                        fontSize="13px"
                        mt={1}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        Senior BSA
                      </Text>
                      <Text
                        fontSize="13px"
                        mt={"5px"}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        New Job Posting
                      </Text>
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
                  <Avatar name=" Jhon Smith" src={avtar2}>
                    <AvatarBadge boxSize="1em" bg="#FF9F43" />
                  </Avatar>
                  <Stack direction="column">
                    <Text
                      fontSize="13px"
                      lineHeight={"14px"}
                      color={"#4B4B4B"}
                      fontWeight={600}
                    >
                      Jhon Smith
                      <Text
                        fontSize="13px"
                        mt={1}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        Senior BSA
                      </Text>
                      <Text
                        fontSize="13px"
                        mt={"5px"}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        New Job Posting
                      </Text>
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
                  <Avatar name="Nina Jhon" src={avtar3}>
                    <AvatarBadge boxSize="1em" bg="#EA5455" />
                  </Avatar>
                  <Stack direction="column">
                    <Text
                      fontSize="13px"
                      lineHeight={"14px"}
                      color={"#4B4B4B"}
                      fontWeight={600}
                    >
                      Nina Jhon
                      <Text
                        fontSize="13px"
                        mt={1}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        Senior BSA
                      </Text>
                      <Text
                        fontSize="13px"
                        mt={"5px"}
                        fontWeight={400}
                        color={"#A8AAAE"}
                      >
                        New Job Posting
                      </Text>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
              <hr />
            </Box>
          </GridItem>
          <GridItem >
            <Box mb={4}>
              <Box  background={"#FFFFFF"} borderRadius={"8px"} p={"16px"}>
                <Box border={"1px solid #E9E7FD"} borderRadius={"8px"} background={"#FFFFFF"} display={"flex"} flexDirection={"column"} >
                 
                <Box p={"16px"} borderRadius={"8px 8px 0px 0px"}  w={"100%"} h={"50px"} alignItems={"center"} backgroundColor={"#E9E7FD"} display={"flex"} justifyContent={"space-between"}>
                  <Heading as="h4" size="md" color={"#0D1136"}>
                    About
                  </Heading>
                  <Box h={"34px"} w={"34px"} background={"#FFFF"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <AiOutlinePlus />
                  </Box>

                </Box>
                <Box p={"16px"} gap={"20px"} borderRadius={"8px"}  w={"100%"} display={"flex"} justifyContent={"space-between"}>
                 <Box width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>A successful tech professional with over 20+ years of work experience across a set of diverse industries. Both a technology and business. management professional specializing in planning / resourcing / execution & delivery of large-scale business systems implementation for fortune 500 companies as well as start-ups. Experience with CRM (SFDC / MS Dynamics), CLM / CPQ, HR, ERP, Digital Product Rollouts, System Migration, Financials and...  {isExpanded ? (
                   <>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate inventore ipsa doloribus, nostrum reprehenderit perspiciatis repudiandae provident facere tempora aperiam, deleniti ea praesentium eveniet voluptatum similique, consequuntur illo totam placeat. Suscipit.
                        <button style={{color:"#6258CC"}}  onClick={toggleExpansion}>See Less</button>
                      </>
                    ) : (
                      <button  style={{color:"#6258CC"}}  onClick={toggleExpansion}>See More</button>
                    )}</Box>
                
                  
                 <Box h={"34px"} w={"34px"} background={"#E9E7FD"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <TbPencil />
                  </Box>

                </Box>
                </Box>
              </Box>
            </Box>
            <Box mb={4}>
              <Box  background={"#FFFFFF"} borderRadius={"8px"} p={"16px"}>
                <Box border={"1px solid #E9E7FD"} borderRadius={"8px"} background={"#FFFFFF"} display={"flex"} flexDirection={"column"} >
                 
                <Box p={"16px"} borderRadius={"8px 8px 0px 0px"}  w={"100%"} h={"50px"} alignItems={"center"} backgroundColor={"#E9E7FD"} display={"flex"} justifyContent={"space-between"}>
                  <Heading as="h4" size="md" color={"#0D1136"}>
                    Experience
                  </Heading>
                  <Box h={"34px"} w={"34px"} background={"#FFFF"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <AiOutlinePlus />
                  </Box>

                </Box>
                <Box p={"16px"} gap={"20px"} borderRadius={"8px"}  w={"100%"} display={"flex"} justifyContent={"space-between"}>
                 <Box padding={"16px"} width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>
                  <Stack  mb={"12px"} direction={"row"} spacing={"16px"}>
                    <Image h={"64px"} w={"64px"} src={Ace} />
                    <Stack color={"#4B4B4B"} h={"64px"} direction={"column"} spacing={"4px"}>
                      <Box fontSize={"18px"} fontWeight={600}>
                         Sr. Program Manager
                      </Box>
                      <Box fontSize={"13px"} fontWeight={600}>
                      ACE Money Transfer<br/>
                      Oct 2015 - Present - 6 years 9 months

                      </Box>

                    </Stack>
                  </Stack>
                   <Box mb={6} width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>A successful tech professional with over 20+ years of work experience across a set of diverse industries. Both a technology and business. management professional specializing in planning / resourcing / execution & delivery of large-scale and...  {isExpandedOne ? (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate inventore ipsa doloribus, nostrum reprehenderit perspiciatis repudiandae provident facere tempora aperiam, deleniti ea praesentium eveniet voluptatum similique, consequuntur illo totam placeat. Suscipit.
            <button style={{color:"#6258CC"}}  onClick={toggleExpansionOne}>See Less</button>
          </>
        ) : (
          <button  style={{color:"#6258CC"}}  onClick={toggleExpansionOne}>See More</button>
        )}</Box>
        <hr />
                  <Stack mt={"22px"} mb={"12px"} direction={"row"} spacing={"16px"}>
                    <Image h={"64px"} w={"64px"} src={GoogleLogo} />
                    <Stack color={"#4B4B4B"} h={"64px"} direction={"column"} spacing={"4px"}>
                      <Box fontSize={"18px"} fontWeight={600}>
                         Sr. Program Manager
                      </Box>
                      <Box fontSize={"13px"} fontWeight={600}>
                      ACE Money Transfer<br/>
                      Oct 2015 - Present - 6 years 9 months

                      </Box>

                    </Stack>
                  </Stack>
                   <Box mb={6} width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>A successful tech professional with over 20+ years of work experience across a set of diverse industries. Both a technology and business. management professional specializing in planning / resourcing / execution & delivery of large-scale and...  {isExpandedTwo ? (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate inventore ipsa doloribus, nostrum reprehenderit perspiciatis repudiandae provident facere tempora aperiam, deleniti ea praesentium eveniet voluptatum similique, consequuntur illo totam placeat. Suscipit.
            <button style={{color:"#6258CC"}}  onClick={toggleExpansionTwo}>See Less</button>
          </>
        ) : (
          <button  style={{color:"#6258CC"}}  onClick={toggleExpansionTwo}>See More</button>
        )}</Box>
        <hr />
                  <Stack mt={"22px"} mb={"12px"} direction={"row"} spacing={"16px"}>
                    <Image h={"64px"} w={"64px"} src={UpPng} />
                    <Stack color={"#4B4B4B"} h={"64px"} direction={"column"} spacing={"4px"}>
                      <Box fontSize={"18px"} fontWeight={600}>
                         Sr. Program Manager
                      </Box>
                      <Box fontSize={"13px"} fontWeight={600}>
                      ACE Money Transfer<br/>
                      Oct 2015 - Present - 6 years 9 months

                      </Box>

                    </Stack>
                  </Stack>
                   <Box width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>A successful tech professional with over 20+ years of work experience across a set of diverse industries. Both a technology and business. management professional specializing in planning / resourcing / execution & delivery of large-scale and...  {isExpandedThree ? (
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptate inventore ipsa doloribus, nostrum reprehenderit perspiciatis repudiandae provident facere tempora aperiam, deleniti ea praesentium eveniet voluptatum similique, consequuntur illo totam placeat. Suscipit.
            <button style={{color:"#6258CC"}}  onClick={toggleExpansionThree}>See Less</button>
          </>
        ) : (
          <button  style={{color:"#6258CC"}}  onClick={toggleExpansionThree}>See More</button>
        )}</Box>
                 </Box>
                
                  
                 <Box h={"34px"} w={"34px"} background={"#E9E7FD"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <TbPencil />
                  </Box>

                </Box>
                </Box>
              </Box>
            </Box>
            <Box mb={4}>
              <Box  background={"#FFFFFF"} borderRadius={"8px"} p={"16px"}>
                <Box border={"1px solid #E9E7FD"} borderRadius={"8px"} background={"#FFFFFF"} display={"flex"} flexDirection={"column"} >
                 
                <Box p={"16px"} borderRadius={"8px 8px 0px 0px"}  w={"100%"} h={"50px"} alignItems={"center"} backgroundColor={"#E9E7FD"} display={"flex"} justifyContent={"space-between"}>
                  <Heading as="h4" size="md" color={"#0D1136"}>
                    Experience
                  </Heading>
                  <Box h={"34px"} w={"34px"} background={"#FFFF"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <AiOutlinePlus />
                  </Box>

                </Box>
                <Box p={"16px"} gap={"20px"} borderRadius={"8px"}   w={"100%"} display={"flex"} justifyContent={"space-between"}>
                 <Box  padding={"16px"} width={"96%"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>
                  <Stack  direction={"row"} spacing={"16px"}>
                    <Image h={"64px"} w={"64px"} src={CourseraPng} />
                    <Stack color={"#4B4B4B"} h={"64px"} direction={"column"} spacing={"4px"}>
                      <Box fontSize={"18px"} fontWeight={600}>
                      California Polytechnic State University - San Lus Obispo
                      </Box>
                      <Box fontSize={"13px"} fontWeight={600}>
                      Industrial Systems Engineering / Operation Research

                      </Box>

                    </Stack>
                  </Stack>
                  
                 </Box>
                
                  
                 <Box h={"34px"} w={"34px"} background={"#E9E7FD"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <TbPencil />
                  </Box>

                </Box>
                </Box>
              </Box>
            </Box>
            <Box mb={4}>
              <Box  background={"#FFFFFF"} borderRadius={"8px"} p={"16px"}>
                <Box border={"1px solid #E9E7FD"} borderRadius={"8px"} background={"#FFFFFF"} display={"flex"} flexDirection={"column"} >
                 
                <Box p={"16px"} borderRadius={"8px 8px 0px 0px"}  w={"100%"} h={"50px"} alignItems={"center"} backgroundColor={"#E9E7FD"} display={"flex"} justifyContent={"space-between"}>
                  <Heading as="h4" size="md" color={"#0D1136"}>
                    Experience
                  </Heading>
                  <Box h={"34px"} w={"34px"} background={"#FFFF"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <AiOutlinePlus />
                  </Box>

                </Box>
                <Box p={"16px"} gap={"20px"} borderRadius={"8px"}   w={"100%"} >
                 <Box display={"flex"} justifyContent={"space-between"} fontSize={"15px"} fontWeight={"400"} lineHeight={"22px"} color={"#4B465C"}>
                  <Stack  direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={"16px"}>
                  <Badge borderRadius={"4px"} color={"#4B465C"} fontSize={"13px"} padding={"10px"}>  React JS / Native</Badge>
                  <Badge borderRadius={"4px"} color={"#4B465C"} fontSize={"13px"} padding={"10px"}>  AWS</Badge>
                  <Badge borderRadius={"4px"} color={"#4B465C"} fontSize={"13px"} padding={"10px"}>  JAVA</Badge>
                  </Stack>
                  <Box h={"34px"} w={"34px"} background={"#E9E7FD"} display={"flex"} borderRadius={"100%"} justifyContent={"center"} cursor={"pointer"} textAlign={"center"} alignItems={"center"}>
                    <TbPencil />
                  </Box>
                 </Box>
                </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem
          mb={"26px"}
          // overflowY={"auto"}
            gap={"32px"}
          
            gridGap={"32px"}
            borderRadius={"8px"}
          >
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
                  {/* <AvatarBadge
                    borderColor="transparent"
                    boxSize="1.8em"
                    bg="#28C76F"
                  /> */}
                </Avatar>
                <Box width={"18px"} height={"18px"} borderRadius={"100%"} position={"absolute"} top={"100px"} left={"91px"} background={"#28C76F"}>
                  {/* make a abosulte circle  */}

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
                  fontWeight={600}
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
                      <Text  color={"#4B465C"} fontSize="13px" fontWeight={400}>
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
                      <Text  color={"#4B465C"} fontSize="13px" fontWeight={400}>
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
              </Box>
            </Box>
            

          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default ResourceMarketplace;
