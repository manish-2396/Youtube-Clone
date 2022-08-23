import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import logo from "../Picture/homo-logo.png";
import { getdata } from '../Redux/action';
import { Box, Button, Input, Center, Image, Spacer, HStack, Avatar } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom"
import profile from "../Picture/manish.jpg"
import video from "../Image/videoplus.png"
import bell from "../Image/bell-regular.svg"

const Navbar = () => {

  const [text, setText] = useState("")
  const [data, setData] = useState("")


  const dispatch = useDispatch();

  const handleClick = () => {
    setData(text)
  }




  useEffect(() => {
    dispatch(getdata(data))
  }, [data, dispatch])


  return (
    <div>
      <Center >
        <Box w="200px" alignItems="start" >
          <Link to="/" >
            <Image src={logo} />
          </Link>
        </Box>
        <Spacer />
        <Box borderColor="black" alignItems="center" >
          <HStack mr={10}>
            <Input width="600px" borderRadius={0} border-Color="#fff" type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
            <Button onClick={handleClick} borderRadius={0} >
              <BsSearch />
            </Button>
          </HStack>
        </Box>
        <Spacer />
        <HStack alignItems="end" gap="25px">
          <Box>
            <Image w="35px" src={video} />
          </Box>
          <Box>
            <Image w="35px"  src={bell} />
          </Box>
          <Box>
            <Avatar w="35px" h="35px" src={profile} />
          </Box>
        </HStack>
      </Center>
    </div>
  )
}

export default Navbar



