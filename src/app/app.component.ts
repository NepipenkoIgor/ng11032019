import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

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

        const someObservable$$: Subject<any> = new Subject();
        const resultObservable$ = someObservable$$.pipe(
            filter(Boolean),
            mergeMap((isResult: any) => {
                return Promise.resolve(isResult);
            })
        );
        resultObservable$.subscribe(value => {
            console.log('Sub 1', value);
        });

        someObservable$$.next(null);
        someObservable$$.next(false);

        someObservable$$.next({ name: 'Igor' });

        setTimeout(() => {
            someObservable$$.next({ name: 'Vlad' });
        }, 3000);
    }

    getSafeHtml(): SafeHtml {
        return this.sanitazer.bypassSecurityTrustHtml(this.content);
    }

    // makeMenu(hotels): string[] {
    //     return new Set(...hotels.map((hotel)=> hotel.type))
    // }
}
