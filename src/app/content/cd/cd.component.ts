import { ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

export class Person {
    public constructor(public firstName: string, public lastName: string) {}

    public getDate(): Date {
        return new Date();
    }
}

@Component({
    selector: 'app-cd',
    templateUrl: './cd.component.html',
    styleUrls: ['./cd.component.css'],
})
export class CdComponent implements OnInit {
    public person1!: Person;
    public person2!: Person;
    public titleDef = 'Default';

    public constructor(private zone: NgZone, private appRef: ApplicationRef, private cd: ChangeDetectorRef) {
        console.log('Constructor');
        console.log('OnINit');
        this.person1 = new Person('Igor', 'Nepipenko');
        this.person2 = new Person('Vladimir', 'Loban');

        setTimeout(() => {
            this.person2.firstName = 'Evgeniy';
            // this.appRef.tick();
            this.cd.detectChanges();
        }, 5000);
        setTimeout(() => {
            this.person2 = new Person('Igor', 'Nepipenko');
        }, 10000);

        ga.getProint(point => {
            zone.run(() => (this.point = point));
            zone.runOutsideAngular(() => {});
        });
    }

    public ngOnInit(): void {}
}
