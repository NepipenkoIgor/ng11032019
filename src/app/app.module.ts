import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';

// Module / directives/ pipes/ services
// Module-> es6 module
// declarations => let /const

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ProductsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
