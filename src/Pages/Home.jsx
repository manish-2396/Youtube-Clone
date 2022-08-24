import { useSelector } from 'react-redux'
import { Box, SimpleGrid, Heading, HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { videoData } from "../utils/data"
import { useEffect } from 'react'

import homesolid from "../Image/house-solid.svg"
import short from "../Image/shorts.png"
import libary from "../Image/libary.png"
import like from "../Image/like.png"
import histroy from "../Image/histroy.png"
import video from "../Image/video.png"
import subscribe from "../Image/subscribe.png"
import watch from "../Image/clock-regular.svg"



const Home = () => {

  useEffect(() => {
    document.title = "YouTube"
  })

  const Data = useSelector(store => store)

  const videoData = Data.Video

  console.log(videoData)

  return (
    <HStack alignItems="start" >
      <Box w="30rem" m="2rem"  >
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={homesolid} mr="1rem" />
          <Heading fontSize="14px">Home</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={short} mr="1rem" />
          <Heading fontSize="14px" >Shorts</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={subscribe} mr="1rem" />
          <Heading fontSize="14px" >Subscriptions</Heading>
        </HStack>
        <hr />
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={libary} mr="1rem" />
          <Heading fontSize="14px" >Library</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={histroy} mr="1rem" />
          <Heading fontSize="14px">History</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={video} mr="1rem" />
          <Heading fontSize="14px" >Your Video</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={watch} mr="1rem" />
          <Heading fontSize="14px" >Watch Later</Heading>
        </HStack>
        <HStack alignItems="start" mt="20px" >
          <Image w="30px" src={like} mr="1rem" />
          <Heading fontSize="14px" >Like Video</Heading>
        </HStack>
      </Box>
      <Box m={3}>
        <br />

        <SimpleGrid columns={[2, null, 4]} spacing='20px'>
          {
            videoData && videoData.map((e) => {

              return (

                <Box key={e.etag}>
                  <Link to={`/${e.id.videoId}`}>
                    <Box
                      as="iframe"
                      w="100%"
                      src={`https://www.youtube.com/embed/${e.id.videoId}`}
                    // allowFullScreen
                    />
                    <br />
                    <Heading fontSize={15} >{e.snippet.title}</Heading>
                  </Link>
                </Box>

              )

            })
          }
        </SimpleGrid>
      </Box>
    </HStack>
  )
}

export default Home

