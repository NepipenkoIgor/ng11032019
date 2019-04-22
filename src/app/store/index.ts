import { IProduct, productsReducer } from './reducers/products.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducer';
import { IUser, userReducer } from './reducers/user.reducer';
import { ProductsActions } from './actions/products.actions';

export interface IStore {
    products: IProduct[];
    cart: EntityState<ICartProduct>[];
    user: IUser;
}

// TODO  remove any !!!!!!!!!!;
export const reducers: ActionReducerMap<IStore, ProductsActions> = {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
};
