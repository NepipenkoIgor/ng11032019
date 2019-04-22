import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { Observable } from 'rxjs';
import {
    ICartProduct,
    productsWithBonuses,
    selectAll,
    totalPrice,
    trueProductsCount,
} from '../../store/reducers/cart.reducer';
import {
    DecrementPeoductInCart,
    IncrementProductInCart,
    RemoveProductFromCart,
} from '../../store/actions/cart.actions';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    public products$!: Observable<ICartProduct[]>;
    public totalCount$!: Observable<number>;
    public totalPrice$!: Observable<number>;

    constructor(private store: Store<IStore>) {}

    ngOnInit() {
        this.products$ = this.store.select(productsWithBonuses);
        this.totalCount$ = this.store.select(trueProductsCount);
        this.totalPrice$ = this.store.select(totalPrice);
    }

    removeProduct(product: ICartProduct) {
        this.store.dispatch(new RemoveProductFromCart(product));
    }

    incrementProduct(product: ICartProduct) {
        this.store.dispatch(new IncrementProductInCart(product));
    }

    decrementProduct(product: ICartProduct) {
        this.store.dispatch(new DecrementPeoductInCart(product));
    }
}
