import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../mock/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public set product(product: IProduct) {
    if (!product) {
      return;
    }
    // do something
    this.internalProduct = product;
  }

  @Input()
  public index: number;

  @Input()
  public isOdd: number;

  public internalProduct: IProduct;

  constructor() {
  }

  ngOnInit() {
  }

  public makeUrl(src: string): string {
    return `${src}?random=${this.index}`;
  }

}
