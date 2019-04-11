import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { IProduct } from '../products.service';

@Component({
    selector: 'app-one-product',
    templateUrl: './one-product.component.html',
    styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
    public product: IProduct;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        console.log(this.activatedRoute.snapshot);
        this.activatedRoute.data.subscribe((data: Data) => {
            console.log(data);
            this.product = data.product;
        });
        this.activatedRoute.params.subscribe((params: Params) => {
            console.log(params.id);
        });
        this.activatedRoute.queryParams.subscribe((query: Params) => {
            console.log(query.filter);
        });
    }
}
