import { BASE_URL } from './../../api/config';
import { GET_PRODUCTS } from './../Constants/ProductConstants';

export const getProductsAction = () => async (dispatch,getState) =>{
    if (!Object.keys(getState().products.products).length) {
        const data = await (await fetch(`${BASE_URL}Product/productlist`)).json()
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}