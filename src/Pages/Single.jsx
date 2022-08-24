import { AspectRatio, Box, Heading, Flex, Spacer, HStack, Image  , Text} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { videoData } from "../utils/data"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import like from '../Image/like.png';
import dislike from '../Image/dislike.png';
import share from '../Image/share.png';
import clip from '../Image/clip.png';

const Single = () => {

  const { id } = useParams();

  const videoData = useSelector(store => store.Video)

  const data = videoData.filter(e => e.id.videoId === id)





  useEffect(() => {
    document.title = data[0].snippet.title;
  }, [data])


  return (
    <Box>
      <Box m="1.5rem">
        <AspectRatio maxW='53rem' ratio={2}>
          <iframe
            title='naruto'
            src={`https://www.youtube.com/embed/${data[0].id.videoId}`}
            allowFullScreen
          />

        </AspectRatio>
        <br />
        <Heading fontSize={20} maxW="53rem" textAlign="left" >{data[0].snippet.title}</Heading>
        <Box maxW="53rem"   >
          <Flex  >
            <Spacer />
            <HStack p='4' style={{ cursor:"pointer" }} >
              <Image maxW="5rem" src={like} />
              <Heading fontSize="1rem" >Like</Heading>
            </HStack>
            <HStack p='4' style={{ cursor:"pointer" }} >
              <Image maxW="5rem" src={dislike} />
              <Heading fontSize="1rem" >Dislike</Heading>
            </HStack>
            <HStack p='4' style={{ cursor:"pointer" }} >
              <Image maxW="5rem" src={share} />
              <Heading fontSize="1rem" >Share</Heading>
            </HStack>
            <HStack p='4' style={{ cursor:"pointer" }} >
              <Image maxW="5rem" src={clip} />
              <Heading fontSize="1rem" >Clip</Heading>
            </HStack>
          </Flex>
        </Box>
      </Box>
      <Box pos="absolute" right="1rem" maxW="25rem" top="5.6rem">
        {
          videoData && videoData.map((e) => {

            return (

              <HStack >
                <Box key={e.etag} maxW="100%"  >
                  <Link to={`/${e.id.videoId}`}>
                    <Box
                      as="iframe"
                      w="100%"
                      src={`https://www.youtube.com/embed/${e.id.videoId}`}
                    />
                    <br />

                  </Link>
                </Box>
                <Box maxW="12rem" >
                  <Heading fontSize="1.0rem" textAlign="start" >{e.snippet.title}</Heading>
                  <Text fontSize="1rem" >Channel Name :{e.snippet.channelTitle}</Text>
                </Box>
              </HStack>
            )

          })
        }
      </Box>
    </Box>

  )
}

export default Single