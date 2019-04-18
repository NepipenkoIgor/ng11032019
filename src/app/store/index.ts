import { IProduct, productsReducer } from './reducers/products.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface IStore {
    products: IProduct[];
}
// TODO  remove any
export const reducers: ActionReducerMap<IStore> = {
    products: productsReducer as any,
};
