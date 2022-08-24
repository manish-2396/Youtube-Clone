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
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [text, setText] = useState("")
  const [data, setData] = useState("")
  let navigate = useNavigate();


  const dispatch = useDispatch();

  const handleClick = () => {
    setData(text)
    navigate("/", { replace: true });

  }




  useEffect(() => {
    dispatch(getdata(data))
  }, [data, dispatch])


  return (

    <Center maxH={20} ml="1rem" mr="1rem" >
      <Box w="100px" alignItems="start" >
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
          <Image w="20px" src={video} />
        </Box>
        <Box>
          <Image w="20px" src={bell} />
        </Box>
        <Box>
          <Avatar w="30px" h="30px" src={profile} />
        </Box>
      </HStack>
    </Center>

  )
}

export default Navbar



