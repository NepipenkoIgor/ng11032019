import { Route } from '@angular/router';
import { ProductsComponent } from './content/products/products.component';
import { SignupComponent } from './content/signup/signup.component';
import { SigninComponent } from './content/signin/signin.component';
import { ProductsListComponent } from './content/products/products-list/products-list.component';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { ProductResolveService } from './content/products/one-product/product-resolve.service';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent,
            },
            {
                path: ':id',
                component: OneProductComponent,
                data: {
                    title: 'One product page',
                },
                resolve: {
                    product: ProductResolveService,
                },
            },
        ],
    },
    {
        path: 'registration',
        loadChildren: './content/signup/signup.module#SignupModule',
    },
    {
        path: 'login',
        component: SigninComponent,
    },
    {
        path: '**',
        redirectTo: 'products',
    },
];
