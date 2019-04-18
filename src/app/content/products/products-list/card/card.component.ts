import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TooltipDirective } from '../../../../common/directives/tooltip.directive';
import { IProduct } from '../../../../store/reducers/products.reducers';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
    @Input()
    public set product(product: IProduct) {
        if (!product) {
            return;
        }
        // do something
        this.internalProduct = product;
    }

    @Input()
    public index!: number;

    @Input()
    public isOdd!: number;

    @ViewChild('t', { read: TooltipDirective })
    public tooltip!: TooltipDirective;

    public internalProduct!: IProduct;

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit(): void {
        // console.log(this.tooltip);
        // setTimeout(() => this.tooltip.show(), 1000);
    }

    public makeUrl(src: string): string {
        return `${src}?random=${this.index}`;
    }
}
