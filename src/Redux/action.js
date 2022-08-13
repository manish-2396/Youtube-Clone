import axios from "axios";
import * as types from "./actionTypes";

export const getdata = (payload) => (dispatch) => {
//   dispatch({ type: types.GET_DATA_REQUEST });
console.log(payload)
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${payload}&key=AIzaSyDXhep2p8gDJNWgB_obPvnBhaw52oRop2c`
    )
    .then((r) => {
      // console.log(r.data)
      dispatch({ type: types.GET_DATA_SUCSSES, payload: r.data.items });
    })
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILUER});
    });
};

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=40&key=AIzaSyDXhep2p8gDJNWgB_obPvnBhaw52oRop2c' \
// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]'
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=40&q=thor&key=AIzaSyDXhep2p8gDJNWgB_obPvnBhaw52oRop2c' \
  