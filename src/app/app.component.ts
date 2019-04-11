import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public logo = 'assets/img/logo.png';
    public searchText = '';

    public content = `<span style="color:red"> Span text </span>`;

    public constructor(private sanitazer: DomSanitizer) {
        // console.log('start');
        // console.log('end');
        // setTimeout(() => console.log('timeout 1'));
        // setTimeout(() => console.log('timeout 2'));
        // Promise.resolve().then(() => console.log('promise 1'));
        // Promise.resolve().then(() => console.log('promise 2'));
        // -start-end -- promise 1 -- promise 2'  ---- timeout 1  ---- timeout 2
        // products$.subscribe((p: IProducts[]) => this.products = p);
    }

    getSafeHtml(): SafeHtml {
        return this.sanitazer.bypassSecurityTrustHtml(this.content);
    }

    // makeMenu(hotels): string[] {
    //     return new Set(...hotels.map((hotel)=> hotel.type))
    // }
}
