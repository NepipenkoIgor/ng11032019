import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appTooltip]',
    exportAs: 'tool,tooltip',
})
export class TooltipDirective implements OnInit {
    @Input()
    public set appTooltip(text: string) {
        if (!text) {
            return;
        }
        this.tooltipContext.textContent = text;
    }

    @HostBinding('class')
    public initClass = 'myCustomClass';

    private tooltipContext: HTMLSpanElement = this.render.createElement('span');

    constructor(private render: Renderer2, private elementRef: ElementRef) {}

    @HostListener('click', ['$event'])
    public resize(e: MouseEvent): void {
        e.preventDefault();
        console.log(e);
    }

    public ngOnInit(): void {
        this.render.addClass(this.tooltipContext, 'tooltiptext');
        this.render.appendChild(this.elementRef.nativeElement, this.tooltipContext);
    }

    public show(): void {
        this.render.addClass(this.tooltipContext, 'open');
    }

    public hide(): void {
        this.render.removeClass(this.tooltipContext, 'open');
    }
}
