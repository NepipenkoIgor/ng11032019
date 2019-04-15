import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    public products$!: Observable<IProduct[]>;

    public constructor(private productsService: ProductsService) {}

    public ngOnInit(): void {
        this.products$ = this.productsService.getProducts();
    }
}
