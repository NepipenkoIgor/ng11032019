import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct, ProductsService } from '../products.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
