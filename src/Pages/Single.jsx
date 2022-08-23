

import { AspectRatio, Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { videoData } from "../utils/data"
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const Single = () => {

  const { id } = useParams();

  const videoData = useSelector(store => store.Video)

  const data = videoData.filter(e => e.id.videoId === id)

  console.log(data)



  useEffect(() => {
    document.title = data[0].snippet.title;
  }, [data])





  // console.log(id)

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
        <br/>
        <Heading fontSize={20} maxW="53rem" textAlign="left" >{data[0].snippet.title}</Heading>
        <Box border="1px solid black" maxW="53rem" >
          manish
        </Box>
      </Box>
      <Box pos="absolute" right="5rem" maxW="20rem" top="6rem">
        {
          videoData && videoData.map((e) => {

            return (

              <Box key={e.etag} maxW="100%">
                <Link to={`/${e.id.videoId}`}>
                  <Box
                    as="iframe"
                    w="100%"
                    src={`https://www.youtube.com/embed/${e.id.videoId}`}
                  />
                  <br />
                  <Heading fontSize={10} >{e.snippet.title}</Heading>
                </Link>
              </Box>

            )

          })
        }
      </Box>
    </Box>

  )
}

export default Single