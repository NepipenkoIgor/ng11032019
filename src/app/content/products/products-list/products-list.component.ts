import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../../store';
import { IProduct } from '../../../store/reducers/products.reducer';
import { GetProductsPending } from '../../../store/actions/products.actions';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    public products$!: Observable<IProduct[]>;

    public constructor(private store: Store<IStore>) {}

    public ngOnInit(): void {
        this.products$ = this.store.select('products');
        this.store.dispatch(new GetProductsPending());
    }
}
