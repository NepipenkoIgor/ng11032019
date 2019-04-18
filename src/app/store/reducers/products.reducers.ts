import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, ProductsActions } from '../actions/products.actions';
import { Action } from '@ngrx/store';

export interface IProduct {
    id: number;
    title: string;
    img: string;
    price: number;
    author: string;
}

const initialState: IProduct[] = [];

export function productsReducer(state: IProduct[] = initialState, action: ProductsActions): IProduct[] {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return action.payload;
        case GET_PRODUCTS_ERROR:
            return state;
        default:
            return state;
    }
}
