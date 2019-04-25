import { TooltipDirective } from './tooltip.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'app-test-component',
    template: `
        <div id="id1" class="tooltipdirective" [appTooltip]="tooltipText" #t="tooltip"></div>
        <div id="id2" class="with_control" (mouseenter)="t.show()" (mouseleave)="t.hide()"></div>
    `,
})
class TestComponent {
    public tooltipText = 'text for tooltip';
}

describe('TooltipDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, TooltipDirective],
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should work', () => {
        const tooltipContainer = fixture.debugElement.query(By.css('#id1'));
        const tooltip = tooltipContainer.query(By.css('.tooltiptext'));

        expect(tooltip.classes.open).toBeFalsy();

        const tooltipControl = fixture.debugElement.query(By.css('#id2'));
        tooltipControl.triggerEventHandler('mouseenter', null);
        expect(tooltip.classes.open).toBeTruthy();

        tooltipControl.triggerEventHandler('mouseleave', null);
        expect(tooltip.classes.open).toBeFalsy();
    });
});
