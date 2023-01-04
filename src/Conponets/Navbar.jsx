import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import logo from "../Picture/homo-logo.png";
import { getdata } from '../Redux/action';
import { Box, Button, Input, Center, Image, Spacer, HStack, Avatar , Show } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import { Link } from "react-router-dom"
import profile from "../Picture/manish.jpg"
import video from "../Image/videoplus.png"
import bell from "../Image/bell-regular.svg"
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [text, setText] = useState("")
  let navigate = useNavigate();


  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/", { replace: true });
    get()

  }



function get(){
  dispatch(getdata(text))
}
  // useEffect(() => {
   
  // }, [data , text, dispatch])


  return (

    <Center maxH={20} ml="1rem" mr="1rem" >
      <Box maxW="8rem" alignItems="start" >
        <Link to="/" >
          <Image src={logo} />
        </Link>
      </Box>
      <Spacer />
      <Show above="md" > 
      <Box borderColor="black" alignItems="center" >
        <HStack mr={10}>
          <Input m="auto" width="600px" borderRadius={0} borderColor="#fff" type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleClick} borderRadius={0} >
            <BsSearch />
          </Button>
        </HStack>
      </Box>
      </Show>
      <Show below="md">
      <Box borderColor="black" alignItems="center" >
        <HStack mr={10}>
          <Input m="auto" width="150px" borderRadius={0} borderColor="#fff" type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleClick} borderRadius={0} >
            <BsSearch />
          </Button>
        </HStack>
      </Box>
      </Show>
     
      <Spacer />
      <Show above="md">
        <HStack alignItems="end" gap="25px">
        <Box>
          <Image w="20px" src={video} alt="" />
        </Box>
        <Box>
          <Image w="20px" src={bell} alt = " "/>
        </Box>
        <Box>
          <Avatar w="30px" h="30px" src={profile} alt="" />
        </Box>
      </HStack>
      </Show>
      
    </Center>

  )
}

export default Navbar



