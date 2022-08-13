import { useSelector } from 'react-redux'
import { Box , SimpleGrid } from "@chakra-ui/react"

const Home = ({ e }) => {

  const videoData = useSelector(store => store.Video)

  console.log(videoData)

  return (
    <Box>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        {
         videoData && videoData.map((e) => {

            return (
              <Box key={e.etag} >
                  <Box
                    as="iframe"
                    // title="naruto"
                    src={`https://www.youtube.com/embed/${e.id.videoId}`}
                    // allowFullScreen
                  />
              </Box>
            )

          })
        }
      </SimpleGrid>
    </Box>
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