import { useSelector } from 'react-redux'
import { Box, SimpleGrid, Heading, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
// import { videoData } from "../utils/data"
import { useEffect } from 'react'

const Home = ({ e }) => {

  useEffect(()=>{
    document.title="YouTube"
  },[])

  const videoData = useSelector(store => store.Video)

  console.log(videoData)

  return (
    <HStack>
      <Box w="15rem"  >
        {



        }
      </Box>
      <Box m={5}>
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

// {/* <iframe width="300"
//                   height="150" src={`https://www.youtube.com/embed/${e.id.videoId}`}
//                   title="YouTube video player"
//                   frameborder="0"
//                   allow="accelerometer; autoplay; 
//                     clipboard-write; encrypted-media; 
//                     gyroscope; picture-in-picture"
//                   allowfullscreen>
//                 </iframe> */}