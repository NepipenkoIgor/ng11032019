import {IProduct} from './mock/products';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {BASE_URL_TOKEN} from './config';

// ToDO что кроме тестов ???

@Injectable()
export class ProductsService {

  public constructor(
    private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`/products`);
  }
}
