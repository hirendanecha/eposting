import React from "react";
import {
  Box,
  Flex,
  Menu,
  MenuItem,
  IconButton,
  useDisclosure,
  Text,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  Popover,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChatDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

import LogoSvg from "../assets/svgs/LogoSvg";
import HomeSvg from "../assets/svgs/HomeSvg";
import Card from "../assets/svgs/Card";
import handclick from "../assets/svgs/hand-click";
import ProfileSvg from "../assets/svgs/ProfileSvg";
import settings from "../assets/svgs/settings";
import NetworkingSvg from "../assets/svgs/NetworkingSvg";
import PostingSvg from "../assets/svgs/PostingSvg";

import JobMarketPlaceSvg from "../assets/svgs/JobMarketPlaceSvg";
import ResourceMarketPlace from "../assets/svgs/ResourceMarketPlaceSvg";
import { SearchIcon } from "@chakra-ui/icons";
import { useLocation, Link } from "react-router-dom";

function ResponsiveHeader() {
  const location = useLocation();

  const isJobMarketplacePage = location.pathname.endsWith("/job-marketplace");
  const isResourceMarketplacePage = location.pathname.endsWith("/resource-marketplace");


  // Function to toggle the dropdown menu.
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        p={6}
        position={"fixed"}
        w={"100%"}
        sx={{ background: "white",zIndex:"100", borderBottom: "1px solid #DFDFE3" }}
      >
        <Flex  alignItems="center" >
          <Box sx={{mr:"269px",  display: "flex" }}>
            <LogoSvg />
          </Box>
          <Flex w={"100%"}  alignItems="center" justifyContent="space-between">
        <Flex  spacing={"20px"} w={{ base: "auto", md: "55%" }} alignItems="center" justifyContent="space-between">
          <Box
          display={{base:"none", md:"flex"}}
          w={{base:"auto", md:"600px"}}
            style={{
              border: "1px solid #4B465C",
              borderRadius: "8px",
              height: "50px",
              // display: "flex",
              justifyContent: "space-between",
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
            <Box
              style={{
                width: "140px",
                paddingLeft: "13px",
                paddingRight: "13px",
                height: "50px",
                borderLeft: "1px solid #4B465C",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Select variant="unstyled" placeholder="Jobs" />
            </Box>
          </Box>
          </Flex>
        
          <Box display={{ base: "none", md: "block" }}>
            <Flex alignItems="center">
                <Link to="/">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 12,
                }}
              >
                <HomeSvg />
                <Text sx={{ fontSize: "15px", color: "#4B465C" }}>Home</Text>
              </Box>
              </Link>
              <Link to="/job-marketplace">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: 12,
                    cursor: "pointer",
                  }}
                >
                  <JobMarketPlaceSvg isJobMarketplacePage={isJobMarketplacePage}/>
                  <Text
                    sx={{
                      fontSize: "15px",
                      color: isJobMarketplacePage ? "#7367F0" : "#4B465C",
                    }}
                  >
                    Jobs Marketplace
                  </Text>
                </Box>
              </Link>
              <Link to="/resource-marketplace">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: 12,
                    cursor: "pointer",
                    color: isResourceMarketplacePage ? "#7367F0" : "#4B465C",
                  }}
                >
                  <ResourceMarketPlace isResourceMarketplacePage={isResourceMarketplacePage} />
                  <Text sx={{ fontSize: "15px",  color: isResourceMarketplacePage ? "#7367F0" : "#4B465C", }}>
                    Resource Marketplace
                  </Text>
                </Box>
              </Link>
              <Box
                sx={{
                  background: "#EEEEEF",
                  p: "8px",
                  pos:"relative",
                  borderRadius: "100px",
                  mr: 4,
                  width: "34px",
                  h: "34px",
                }}
              >
                <Box sx={{position:"absolute",borderRadius:"100%",color:"#FFFF", height:"12px", top:"1px", left:"23px", width:"12px", background:"#DB4437", display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "6px",fontWeight:500}}>04
                  </Box>
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#4B4B4B",
                  }}
                >
                  <BsChatDots />
                </Box>
              </Box>
              <Box mr={2}>
                <Popover>
                  <PopoverTrigger>
                    <Box
                      sx={{
                        background: "#EEEEEF",
                        p: "8px",
                        borderRadius: "100px",
                        width: "34px",
                        h: "34px",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          color: "black",
                        }}
                      >
                        <BsThreeDotsVertical />
                      </Box>
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody
                      sx={{ p: 2, border: "", borderRadius: "6px", gap: "4px" }}
                    >
                      <Menu  sx={{ w: "100%" }}>
                        <List>
                          <MenuItem 
                             sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon  as={ProfileSvg } />
                              Profile
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={PostingSvg} />
                              Posting
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                             sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={NetworkingSvg} />
                              Networking
                            </ListItem>
                          </MenuItem>
                          
                          <MenuItem
                           sx={{
                            height: "38px",
                            borderRadius: "6px",
                            "&:hover svg, &:focus svg":{
                                 stroke:"#938AF3"

                            },
                            "&:hover, &:focus": {
                              backgroundColor: "#F4F3FE",
                              color:"#938AF3"
                            },
                          }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={handclick} />
                             Call-To-Action
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"
  
                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={Card} />
                             Payments
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"
  
                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={settings} />
                              Settings
                            </ListItem>
                          </MenuItem>
                        </List>
                      </Menu>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
                <FiChevronDown mr={1}/>
            </Flex>
          </Box>

          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<RxHamburgerMenu />}
              onClick={onToggle}
              aria-label="Open Menu"
            />
          </Box>
        </Flex>
        </Flex>

        <Box display={{ base: isOpen ? "block" : "none", md: "none" }}>
          <Menu>
            
          <List>
                          <MenuItem 
                             sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon  as={ProfileSvg } />
                              Profile
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={PostingSvg} />
                              Posting
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                             sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"

                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={NetworkingSvg} />
                              Networking
                            </ListItem>
                          </MenuItem>
                          
                          <MenuItem
                           sx={{
                            height: "38px",
                            borderRadius: "6px",
                            "&:hover svg, &:focus svg":{
                                 stroke:"#938AF3"

                            },
                            "&:hover, &:focus": {
                              backgroundColor: "#F4F3FE",
                              color:"#938AF3"
                            },
                          }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={handclick} />
                             Call-To-Action
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"
  
                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={Card} />
                             Payments
                            </ListItem>
                          </MenuItem>
                          <MenuItem
                            sx={{
                              height: "38px",
                              borderRadius: "6px",
                              "&:hover svg, &:focus svg":{
                                   stroke:"#938AF3"
  
                              },
                              "&:hover, &:focus": {
                                backgroundColor: "#F4F3FE",
                                color:"#938AF3"
                              },
                            }}
                          >
                            <ListItem
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ListIcon as={settings} />
                              Settings
                            </ListItem>
                          </MenuItem>
                        </List>
          </Menu>
        </Box>
      </Box>
      
    </>
  );
}

export default ResponsiveHeader;
