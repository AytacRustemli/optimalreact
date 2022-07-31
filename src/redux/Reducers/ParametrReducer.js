import { GET_PARAMETRS } from "../Constants/ParametrConstant";

const initialState = {
    parametrs: {}
}

export const parametrReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_PARAMETRS:
            return{
                ...state,
                parametrs: action.payload
            }
    
        default:
            return state;
    }
}