import { IProduct } from './products.reducer';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
    ADD_PRODUCT_TO_CART,
    CartProductsActions,
    DECREMENT_PRODUCT_IN_CART,
    INCREMENT_PRODUCT_IN_CART,
    REMOVE_PRODUCT_FROM_CART,
} from '../actions/cart.actions';
import { createFeatureSelector, createSelector, MemoizedSelector, Selector } from '@ngrx/store';
import { IStore } from '../index';
import { IUser } from './user.reducer';

export interface ICartProduct extends IProduct {
    count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter();

const initialState: EntityState<ICartProduct> = adapter.getInitialState([]);

export function cartReducer(
    state: EntityState<ICartProduct> = initialState,
    actions: CartProductsActions
): EntityState<ICartProduct> {
    switch (actions.type) {
        case ADD_PRODUCT_TO_CART: {
            const entity: ICartProduct = state.entities[actions.payload.id];
            return adapter.upsertOne(
                {
                    ...actions.payload,
                    count: entity ? entity.count + 1 : 1,
                },
                state
            );
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return adapter.removeOne(actions.payload.id, state);
        }
        case INCREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne(
                {
                    id: actions.payload.id,
                    changes: { count: actions.payload.count + 1 },
                },
                state
            );
        }
        case DECREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne(
                {
                    id: actions.payload.id,
                    changes: { count: actions.payload.count - 1 },
                },
                state
            );
        }
        default:
            return state;
    }
}

export const { selectAll } = adapter.getSelectors(createFeatureSelector('cart'));
export const userSelector: Selector<IStore, IUser> = (state: IStore) => state.user;
export const productsWithBonuses: MemoizedSelector<IStore, ICartProduct[]> = createSelector(
    userSelector,
    selectAll,
    (user: IUser, products: ICartProduct[]) => {
        return products.map((product: ICartProduct) => {
            return {
                ...product,
                price: product.price * user.bonuses,
            };
        });
    }
);

export const trueProductsCount: MemoizedSelector<IStore, number> = createSelector(
    productsWithBonuses,
    (products: ICartProduct[]) => {
        return products.reduce((count: number, product: ICartProduct) => {
            return (count += product.count);
        }, 0);
    }
);

export const totalPrice: MemoizedSelector<IStore, number> = createSelector(
    productsWithBonuses,
    (products: ICartProduct[]) => {
        return products.reduce((price: number, product: ICartProduct) => {
            return (price += product.price * product.count);
        }, 0);
    }
);
