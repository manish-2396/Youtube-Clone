import * as types from './actionTypes';

const init = {
    isLoading:false,
    isError:false,
    Video: []
}

export const reducer = (state = init , action) => {

 
    // console.log(action.payload)

    switch(action.type){

        case types.GET_DATA_REQUEST: {
            return {
                isLoading:true,
                isError:false
            }
        }

        case types.GET_DATA_SUCSSES: {
            return {
                isLoading:false,
                isError:false,
                Video: action.payload
            }
        }

        case types.GET_DATA_FAILUER: {
            return {
                isLoading:false,
                isError:true,
            }
        }

        default:
            return state;
    }
}