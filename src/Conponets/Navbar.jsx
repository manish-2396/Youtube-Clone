import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import logo from "../Picture/homo-logo.png";
import { getdata } from '../Redux/action';
import { Box, Button, Input, Center, Image, Spacer, HStack , Avatar } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom"
import profile from "../Picture/manish.jpg"

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
    <Center m="1rem">
      <Box w="3rem">

      </Box>
      <Box w="100px">
        <Link to="/" >
          <Image src={logo} />
        </Link>
      </Box>
      <Spacer />
      <Box borderColor="black">
        <HStack  mr={10}>
          <Input width="600px"  borderRadius={0} border-Color="#fff" type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleClick} borderRadius={0} ><BsSearch /></Button>
          {/* <BsSearch/> */}
        </HStack>
      </Box>
      <Spacer />
      <Box >
        <Avatar src={profile}/>
      </Box>
    </Center>
  )
}

export default Navbar



