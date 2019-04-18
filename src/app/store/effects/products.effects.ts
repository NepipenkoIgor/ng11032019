import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../content/products/products.service';
import { GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess } from '../actions/products.actions';
import { IProduct } from '../reducers/products.reducers';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
    @Effect()
    loadMovies$ = this.actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() =>
            this.productsService.getProducts().pipe(
                map((products: IProduct[]) => new GetProductsSuccess(products)),
                catchError((err: any) => of(new GetProductsError(err)))
            )
        )
    );

    constructor(private actions$: Actions, private productsService: ProductsService) {}
}
