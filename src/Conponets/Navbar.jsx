import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import logo from "../Picture/homo-logo.png";
import { getdata } from '../Redux/action';
import { Box, Button, Input, Center, Image, Spacer, HStack } from "@chakra-ui/react"

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
      <Box w="100px">
        <Image src={logo} />
      </Box>
      <Spacer />
      <Box >
        <HStack>
          <Input type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleClick} >search</Button>
        </HStack>
      </Box>
      <Spacer />
      <Box >
        3
      </Box>
    </Center>
  )
}

export default Navbar



