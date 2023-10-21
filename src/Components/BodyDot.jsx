import { Box, List, ListIcon, ListItem, Menu, MenuItem, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import CircleXSvg from "../assets/svgs/CircleXSvg";
import EyeOffSvg from "../assets/svgs/EyeOffSvg";
import LinkSvg from "../assets/svgs/LinkSvg";
import SaveSvg from "../assets/svgs/SaveSvg";
import FlagSvg from "../assets/svgs/FlagSvg";
import UserxSvg from "../assets/svgs/UserxSvg";
import CodeSvg from "../assets/svgs/CodeSvg";
function BodyDot() {
  return (
     <Popover>
    <PopoverTrigger>
      <Box
        sx={{
          background: "#EEEEEF",
          display: "flex",
            alignItems: "center",
            justifyContent:"center",
          width: "42px",
          h: "32px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin:"auto",
            justifyContent:"center",
            textAlign:"center",
            color: "black",
          }}
        >
          <BsThreeDots />
        </Box>
      </Box>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverBody
        sx={{ p: 2, border: "", borderRadius: "6px", gap: "4px" }}
      >
        <Menu sx={{ w: "100%" }}>
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
                <ListIcon as={SaveSvg} />
                Save
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
                <ListIcon as={LinkSvg} />
                Copy link to post
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
                <ListIcon as={CodeSvg} />
                Embed this post
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
                <ListIcon as={EyeOffSvg} />I don't want to see
                this
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
                <ListIcon as={CircleXSvg} />
                Unfollow
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
                <ListIcon as={UserxSvg} />
                Remove Connection with Mike
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
                <ListIcon as={FlagSvg} />
                Repost post
              </ListItem>
            </MenuItem>
          </List>
        </Menu>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  )
}

export default BodyDot