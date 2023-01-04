import axios from "axios";
import * as types from "./actionTypes";


let api1 = "AIzaSyDLCFAFRPQCrrdC2_xNgXJV6DvGDSOjvkQ"
// let api2 = "AIzaSyDXhep2p8gDJNWgB_obPvnBhaw52oRop2c"

export const getdata = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${payload}&key=${api1}`
    )
    .then((r) => {
      console.log(r.data.items);
      dispatch({
        type: types.GET_DATA_SUCSSES,
        payload: { text: payload, data: r.data.items },
      });
    })
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILUER });
    });
};
