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
      <Box m="3rem">
        <AspectRatio maxW='50rem' ratio={2}>
          <iframe
            title='naruto'
            src={`https://www.youtube.com/embed/${data[0].id.videoId}`}
            allowFullScreen
          />

        </AspectRatio>
        <Heading fontSize={30} maxW="50rem" >{data[0].snippet.title}</Heading>
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
                  // allowFullScreen
                  />
                  <br />
                  <Heading fontSize={15} >{e.snippet.title}</Heading>
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