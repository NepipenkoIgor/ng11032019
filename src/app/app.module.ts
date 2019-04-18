import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './content/products/products-list/card/card.component';
import { ProductsFilterPipe } from './content/products/products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsService } from './content/products/products.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { CustomInterceptorService } from './common/services/custom-interceptor.service';
import { ProductsComponent } from './content/products/products.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SigninComponent } from './content/signin/signin.component';
import { ProductsListComponent } from './content/products/products-list/products-list.component';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import { ProductResolveService } from './content/products/one-product/product-resolve.service';
import { CustomPreloadService } from './common/services/custom-preload.service';
import { FormsModule } from '@angular/forms';
import { NameValidatorDirective } from './content/signin/name-validator.directive';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Module / directives/ pipes/ services
// Module-> es6 module
// declarations => let /const

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        ProductsComponent,
        SigninComponent,
        ProductsListComponent,
        OneProductComponent,
        NameValidatorDirective,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadService }),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([ProductsEffects]),
        environment.production ? [] : StoreDevtoolsModule.instrument(),
    ],
    providers: [
        ProductsService,
        ProductResolveService,
        CustomPreloadService,
        { provide: BASE_URL_TOKEN, useValue: BASE_URL },
        { provide: 'BASE_URL', useValue: 'localhost' },
        { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
