import { BASE_URL } from "../../api/config"
import { GET_PARAMETRS } from "../Constants/ParametrConstant"

export const getParametrsAction = () => async (dispatch,getState) =>{
    if (!Object.keys(getState().parametrs).length) {
        const data = await (await fetch(`${BASE_URL}Paramater/getall`)).json()
        dispatch({
            type: GET_PARAMETRS,
            payload: data
        })
    }
}