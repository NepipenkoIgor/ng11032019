import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public logo = 'assets/img/logo.png';
  public searchText = '';
  public products$;

  public content = `<span style="color:red"> Span text </span>`;

  public constructor(
    private  sanitazer: DomSanitizer,
    private productsService: ProductsService,
  ) {

    // console.log('start');
    // console.log('end');
    // setTimeout(() => console.log('timeout 1'));
    // setTimeout(() => console.log('timeout 2'));
    // Promise.resolve().then(() => console.log('promise 1'));
    // Promise.resolve().then(() => console.log('promise 2'));
    // -start-end -- promise 1 -- promise 2'  ---- timeout 1  ---- timeout 2

    // products$.subscribe((p: IProducts[]) => this.products = p);
  }

  public ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  getSafeHtml(): SafeHtml {
    return this.sanitazer.bypassSecurityTrustHtml(this.content);
  }

}
