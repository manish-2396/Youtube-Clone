import { AspectRatio, Box, Heading, Flex, Spacer, HStack, Image, Text, Show , VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { videoData } from "../utils/data"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import like from '../Image/like.png';
import dislike from '../Image/dislike.png';
import share from '../Image/share.png';
import clip from '../Image/clip.png';
import { getdata } from '../Redux/action';

const Single = () => {
  const dispatch = useDispatch();
  const { id , search} = useParams();

  console.log(id  , search)

  useEffect(() => {
    dispatch(getdata(search))
  },[dispatch , search])

  const {data} = useSelector(store => store.Video)

  let singledata;

  if(data){
     singledata = data.find(e => e.id.videoId === id)
  }


  console.log("a",singledata?.id?.videoId)





  // useEffect(() => {
  //   document.title = data.snippet.title;
  // }, [data])


  return (

   
    <Flex p="2rem" justify="space-between" flexWrap="wrap" >
      <Show above="lg" >
        <Box height="auto" maxW="50rem"  >
          <AspectRatio maxW='98%' ratio={2}>
            <iframe
              title='naruto'
              src={`https://www.youtube.com/embed/${singledata?.id?.videoId}`}
              allowFullScreen
            />
          </AspectRatio>
          <br />
          <Heading fontSize={20} maxW="53rem" textAlign="left" >{singledata?.snippet?.title}</Heading>

          <Box maxW="50rem"   >
            <Flex  >
              <Spacer />
              <HStack p='4' style={{ cursor: "pointer" }} >
                <Image maxW="5rem" src={like} />
                <Heading fontSize="1rem" >Like</Heading>
              </HStack>
              <HStack p='4' style={{ cursor: "pointer" }} >
                <Image maxW="5rem" src={dislike} />
                <Heading fontSize="1rem" >Dislike</Heading>
              </HStack>
              <HStack p='4' style={{ cursor: "pointer" }} >
                <Image maxW="5rem" src={share} />
                <Heading fontSize="1rem" >Share</Heading>
              </HStack>
              <HStack p='4' style={{ cursor: "pointer" }} >
                <Image maxW="5rem" src={clip} />
                <Heading fontSize="1rem" >Clip</Heading>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Show>

      <Show below="sm">
        <Box height="auto" maxW="20rem"  >
          <AspectRatio maxW='98%' ratio={2}>
            <iframe
              title='naruto'
              src={`https://www.youtube.com/embed/${singledata?.id?.videoId}`}
              allowFullScreen
            />
          </AspectRatio>
          <br />
          <Heading fontSize={20} maxW="20rem" textAlign="left" >{singledata?.snippet?.title}</Heading>

          <Box maxW="20rem"   >
            <Flex  >
              <Spacer />
              <HStack p='1' style={{ cursor: "pointer" }} >
                <Image maxW="1rem" src={like} />
                <Heading fontSize="1rem" >Like</Heading>
              </HStack>
              <HStack p='1' style={{ cursor: "pointer" }} >
                <Image maxW="1rem" src={dislike} />
                <Heading fontSize="1rem" >Dislike</Heading>
              </HStack>
              <HStack p='1' style={{ cursor: "pointer" }} >
                <Image maxW="1rem" src={share} />
                <Heading fontSize="1rem" >Share</Heading>
              </HStack>
              <HStack p='1' style={{ cursor: "pointer" }} >
                <Image maxW="2rem" src={clip} />
                <Heading fontSize="1rem" >Clip</Heading>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Show>


      <Box >
        <Show above='lg' >
          <Box height="auto" >
            {
              data?.length !== 0 && data?.map((e) => {
                return (
                  <HStack >
                    <Box key={e.id.videoId} maxW="25rem"  >
                      <Link to={`/${e.id.videoId}`}>
                        <Box
                          as="iframe"
                          w="10rem%"
                          src={`https://www.youtube.com/embed/${e.id.videoId}`}
                        />
                        <br />
                      </Link>
                    </Box>
                    <Spacer />
                    <Box maxW="12rem" height="auto" >
                      <Heading fontSize="1rem" textAlign="start" >{e.snippet.title}</Heading>
                      <Text fontSize="0.8rem" >Channel Name :{e.snippet.channelTitle}</Text>
                    </Box>
                  </HStack>
                )
              })
            }
          </Box>
        </Show>
        <Show below="md">
          <Box height="auto"  >
            {
              data?.length !== 0 && data?.map((e) => {
                return (
                  <VStack pt="2rem" >
                    <Box key={e.id.videoId} maxW="20rem"  >
                      <Link to={`/${e.id.videoId}`}>
                        <Box
                          as="iframe"
                          w="10rem%"
                          src={`https://www.youtube.com/embed/${e.id.videoId}`}
                        />
                        
                        <br />

                      </Link>
                    </Box>
                    <Box maxW="20rem" height="auto" >
                      <Heading fontSize="1rem" textAlign="start" >{e.snippet.title}</Heading>
                      <Text fontSize="1rem" >{e.snippet.channelTitle}</Text>
                    </Box>
                  </VStack>
                )
              })
            }
          </Box>
        </Show>

      </Box>

    </Flex>

  )
}

export default Single