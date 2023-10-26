import React, { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Image,
  Badge,
} from "@chakra-ui/react";
import GoogleLogo from "../assets/pngs/GoogleLogo.png"
import UpPng from "../assets/pngs/UpTechPng.png"
import Ace from "../assets/pngs/Ace.png";
import CourseraPng from "../assets/pngs/CourseraPng.png";
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPencil } from 'react-icons/tb';
import MarketplaceLayout from "../Components/Layout/MarketplaceLayout";


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
      <MarketplaceLayout>
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
     
    </MarketplaceLayout>
    </>
  );
}

export default ResourceMarketplace;
