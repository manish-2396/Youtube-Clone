import { useSelector } from "react-redux";
import {
  Box,
  SimpleGrid,
  Heading,
  HStack,
  Image,
  Show,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import homesolid from "../Image/house-solid.svg";
import short from "../Image/shorts.png";
import libary from "../Image/libary.png";
import like from "../Image/like.png";
import histroy from "../Image/histroy.png";
import video from "../Image/video.png";
import subscribe from "../Image/subscribe.png";
import watch from "../Image/clock-regular.svg";

const Home = () => {
  useEffect(() => {
    document.title = "YouTube";
  });

  const { data, text } = useSelector((store) => store.Video);

  const videoData = data;

  console.log(videoData);

  return (
    <HStack alignItems="start">
      <Show above="lg">
        <Box w="30rem" m="2rem">
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={homesolid} mr="1rem" />
            <Heading fontSize="14px">Home</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={short} mr="1rem" />
            <Heading fontSize="14px">Shorts</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={subscribe} mr="1rem" />
            <Heading fontSize="14px">Subscriptions</Heading>
          </HStack>
          <hr />
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={libary} mr="1rem" />
            <Heading fontSize="14px">Library</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={histroy} mr="1rem" />
            <Heading fontSize="14px">History</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={video} mr="1rem" />
            <Heading fontSize="14px">Your Video</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={watch} mr="1rem" />
            <Heading fontSize="14px">Watch Later</Heading>
          </HStack>
          <HStack alignItems="start" mt="20px">
            <Image w="30px" src={like} mr="1rem" />
            <Heading fontSize="14px">Like Video</Heading>
          </HStack>
        </Box>
      </Show>
      <Box m="5%">
        <br />
        <SimpleGrid columns={[1, 1, 4]} spacing="20px">
          {videoData &&
            videoData.map((e) => {
              return (
                <Box key={e.etag} display={e.id.videoId?"" : "none"}>
                  <Link to={`/${text}/${e.id.videoId}`}>
                    <Box
                      as="iframe"
                      w="100%"
                      src={`https://www.youtube.com/embed/${e.id.videoId}`}
                    />
                    <br />
                    <Heading fontSize={15}>{e.snippet.title}</Heading>
                  </Link>
                </Box>
              );
            })}
        </SimpleGrid>
      </Box>
    </HStack>
  );
};

export default Home;
