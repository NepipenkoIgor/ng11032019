import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logo = 'assets/img/logo.png';
  public searchText = '';

  public content = `<span style="color:red"> Span text </span>`;

  public constructor(
    private  sanitazer: DomSanitizer
  ) {
  }

  getSafeHtml(): SafeHtml {
    return this.sanitazer.bypassSecurityTrustHtml(this.content);
  }

}
