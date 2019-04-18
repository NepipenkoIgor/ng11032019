import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from '../products.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../../../store/reducers/products.reducers';

@Injectable()
export class ProductResolveService implements Resolve<IProduct | null> {
    constructor(private router: Router, private productsService: ProductsService) {}
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct | null> {
        return this.productsService.getProduct(route.params.id).pipe(
            catchError(err => {
                this.router.navigate(['products']);
                return of(null);
            })
        );
    }
}
