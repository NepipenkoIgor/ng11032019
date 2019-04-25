import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../cd.component';

@Component({
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit {
    @Input()
    public person!: Person;

    public constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.cd.detach();

        setTimeout(() => {
            this.cd.reattach();
        }, 7000);
    }
}
