import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CardComponent} from './card/card.component';
import {ProductsFilterPipe} from './products-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {ProductsService} from './products.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BASE_URL, BASE_URL_TOKEN} from './config';
import {CustomInterceptorService} from './common/services/custom-interceptor.service';

// Module / directives/ pipes/ services
// Module-> es6 module
// declarations => let /const

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ProductsFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    {provide: 'BASE_URL', useValue: 'localhost'},
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
