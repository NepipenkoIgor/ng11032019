import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
// OnChanges,
// DoCheck, AfterViewInit,
// AfterViewChecked,
// AfterContentInit,
// AfterContentChecked,
export class HeaderComponent implements OnInit {
    @Input()
    public logo: string;

    // @ContentChild('site_logo', {read: TemplateRef})
    // public logo: TemplateRef<any>;
    //
    // @ViewChild('logo_container', {read: ViewContainerRef})
    // public logoContainer: ViewContainerRef;

    @Output()
    public onSearch: EventEmitter<string> = new EventEmitter();

    public constructor(private router: Router) {
        console.log('constructor');
    }

    public ngOnInit(): void {
        console.log('ngOnInit');
    }

    public goToProducts(): void {
        this.router.navigate(['products']);
    }

    //
    // public ngOnChanges(changes: SimpleChanges): void {
    //   console.log('ngOnChanges', changes);
    // }
    //
    // public ngDoCheck(): void {
    //   console.log('ngDoCheck');
    // }
    //
    // public ngAfterViewInit(): void {
    //   console.log('ngAfterViewInit', this.logoContainer);
    //   Promise.resolve()
    //     .then(() => this.logoContainer.createEmbeddedView(this.logo))
    //     .then(() => this.logoContainer.createEmbeddedView(this.logo));
    // }
    //
    // public ngAfterViewChecked(): void {
    //   console.log('ngAfterViewChecked');
    // }
    //
    // public ngAfterContentInit(): void {
    //   console.log('ngAfterContentInit', this.logo);
    // }
    //
    // public ngAfterContentChecked(): void {
    //   console.log('ngAfterContentChecked');
    // }

    public search(event: Event) {
        const element: HTMLInputElement = event.target as HTMLInputElement;
        this.onSearch.emit(element.value);
    }
}
