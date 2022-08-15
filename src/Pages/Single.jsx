import { AspectRatio, Box , Heading } from '@chakra-ui/react';
import React  , {useEffect}from 'react'
import { useParams } from 'react-router-dom'
// import { videoData } from "../utils/data"
import { useSelector } from 'react-redux'

const Single = () => {

  const { id } = useParams();

  const videoData = useSelector(store => store.Video)

  const data = videoData.filter(e => e.id.videoId === id)

  console.log(data)

  console.log()


  useEffect(()=>{
    document.title= data[0].snippet.title;
  },[data])





  // console.log(id)

  return (
    <Box m="2rem">
      <AspectRatio maxW='50rem' ratio={5}>
        <iframe
          title='naruto'
          src={`https://www.youtube.com/embed/${data[0].id.videoId}`}
          allowFullScreen
        />
        
      </AspectRatio>
      <Heading fontSize={30} maxW="50rem" >{data[0].snippet.title}</Heading>
      
    </Box>
  )
}

export default Single