import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public logo: string;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public search(event: Event) {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    this.onSearch.emit(element.value);
  }
}
