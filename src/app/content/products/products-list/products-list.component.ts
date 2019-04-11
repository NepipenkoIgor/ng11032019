import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    public products$;

    public constructor(private productsService: ProductsService) {}

    public ngOnInit(): void {
        this.products$ = this.productsService.getProducts();
    }
}
