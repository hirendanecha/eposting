import React, { useState } from 'react';

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
  Checkbox,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import HomePage from "../Pages/HomePage";
import avtar from "../assets/pngs/Avatar.png";
import avtar1 from "../assets/pngs/Avatar (1).png";
import avtar2 from "../assets/pngs/Avatar (2).png";
import avtar3 from "../assets/pngs/Avatar (3).png";
import Profile from "../assets/pngs/PP1.png";
import StarSvg from "../assets/svgs/StarSvg";
import InfoSvg from "../assets/svgs/InfoSvg";
import ChatSvg from "../assets/svgs/ChatSvg";

import data from "../data"

import EyeSvg from "../assets/svgs/EyeSvg";
import { SearchIcon } from "@chakra-ui/icons";
import { FiEye } from "react-icons/fi";
import BodyDot from "../Components/BodyDot";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const itemsPerPage = 8;


const JobMarketPlace = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const itemsToDisplay = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <>
      <HomePage />
      <Box p={6} pt={"115px"} sx={{ background: "#F8F7FA", minH: "100vh" }} minH={"100vh"}>
        <Grid  templateColumns={{ base: '1fr', lg: '400px 1fr 400px' }} gap={4}>
          <GridItem  h={{ base:"auto", lg: "88vh"}} >
            <Box overflowY={{ lg: 'auto'}} sx={{
    maxHeight: '100%',
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

            
            <Box
              sx={{
                h: "406px",
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
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <Box h={"96px"} background={"#FFFFFF"} borderRadius={"8px"} p={"16px"}>
                <Box background={"#F8F8F8"} borderRadius={"6px"} h={"64px"} px={"10px"} py={"12px"} display={"flex"} flexDirection={"row"} textAlign={"center"} justifyContent={"space-between"} alignItems={"center"} >
                  <Stack direction={"row"}>
                    <Box h={"18px"} w={"18px"}>
                      <InfoSvg />
                    </Box>
                    <Heading fontSize={"18px"} color={"#4B4B4B"} fontWeight={600} textAlign={"left"}>
                      My Network Connections (8)

                    </Heading>
                  </Stack>
                  <Stack direction={"row"} spacing={"12px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>


                    <Box sx={{ px: "13px", py: "16px" }}
                      style={{
                        border: "1px solid #4B465C",
                        borderRadius: "8px",
                        width: "400px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        flexGrow={1}
                      >
                        <InputGroup display={"flex"} justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
                          <InputLeftElement mt={"-7px"}>
                            <SearchIcon color="gray.300" />
                          </InputLeftElement>
                          <Input
                            color={"#B7B5BE"}
                            variant="unstyled"
                            placeholder="Sale force Project manager"
                          />
                        </InputGroup>
                      </Box>
                    </Box>
                    <Button leftIcon={<SearchIcon />} backgroundColor='#7367F0' fontSize={"15px"} fontWeight={500} color={"#FFFF"} variant='solid'>
                      Search
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box mb={4} borderRadius={"8px"} h={"902px"} p={"16px"} background={"#FFFFFF"}>
            {itemsToDisplay.map((item, index) => (
        <Box
          key={index}
          mb={"10px"}
          h={"100px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderRadius={"8px"}
          p={"16px"}
          border={"1px solid #E5E5E5"}
        >
          <Stack direction="row" display={"flex"} gap={"12px"}>
            <Avatar name={item.name} src={item.avatarSrc}>
              <AvatarBadge boxSize="1em" bg={item.avatarBadgeColor} />
            </Avatar>
            <Stack direction="column">
              <Text
                fontSize="13px"
                lineHeight={"14px"}
                color={"#4B4B4B"}
                fontWeight={600}
              >
                {item.name}
                <Text fontSize="13px" mt={"8px"} fontWeight={400} color={"#A8AAAE"}>
                Saleforce Developer at Conga Works
                </Text>
                <Text fontSize="13px" mt={"5px"} fontWeight={400} color={"#A8AAAE"}>
                Connected 1 month ago
                </Text>
              </Text>
            </Stack>
          </Stack>
          <Stack direction="row" display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"12px"}>
          <Button leftIcon={<ChatSvg />} width={"102px"} background={"#E9E7Fd"} colorScheme='purple' border={"none"} color={"#7367F0"} fontSize={"15px"} variant='outline'>
                    Chat
                  </Button>
                  <Button leftIcon={<FiEye />} height={"38px"} backgroundColor='#7367F0' width={"155px"} fontSize={"15px"} fontWeight={500} color={"#FFFF"} variant='solid'>
                    View Profile
                  </Button>
                  <BodyDot />
          </Stack>
        </Box>
      ))}
            </Box>
            <Box mb={4} display={"flex"} alignItems={"center"} justifyContent={"flex-end"} borderRadius={"8px"} h={"52px"} p={"16px"} background={"#FFFFFF"}>
             
              {currentPage > 1 && (
           <Button style={{
            margin: '4px',
            padding: '4px 8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#F1F0F2',
            color: '#6F6B7D',
            cursor: 'pointer',
          }} fontSize={"13px"}  onClick={() => handlePageChange(currentPage - 1)}>
            <Box  display={"flex"} margin={"auto"} >
            <BsChevronLeft />
            </Box></Button>
        )}
         {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: '4px',
              padding: '4px 8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontWeight:"400",
              fontSize:"13px",
              background: currentPage === index + 1 ? '#7367F0' : '#F1F0F2',
              color: currentPage === index + 1 ? 'white' : '#6F6B7D',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </Button>
        ))}

        {currentPage < totalPages && (
          <Button style={{
            margin: '4px',
            padding: '4px 8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#F1F0F2',
            color: '#6F6B7D',
            fontWeight:"400",
            cursor: 'pointer',
          }} fontSize={"13px"}  onClick={() => handlePageChange(currentPage + 1)}>
            <Box  display={"flex"} margin={"auto"} >
            <BsChevronRight />
            </Box></Button>
        )}
       
        
              

              </Box>
          </GridItem>
          <GridItem
            mb={"26px"}
            gap={"32px"}
            h={{ base:"auto", lg: "88vh"}}
            gridGap={"32px"}
            borderRadius={"8px"}
          >
             <Box overflowY={{  lg: 'auto'}} sx={{ maxHeight: '100%',
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Customize scrollbar thumb color (for webkit browsers)
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent', // Customize scrollbar track color (for webkit browsers)
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Customize scrollbar thumb color on hover (for webkit browsers)
    },
    '&::-webkit-scrollbar-button': {
      display: 'none', // Hide scrollbar buttons (for webkit browsers)
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


          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default JobMarketPlace;
