import axios from "axios";
import * as types from "./actionTypes";

export const getdata = (payload) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${payload}&key=AIzaSyDXhep2p8gDJNWgB_obPvnBhaw52oRop2c`
    )
    .then((r) => {
      dispatch({ type: types.GET_DATA_SUCSSES, payload: r.data.items });
    })
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILUER });
    });
};


