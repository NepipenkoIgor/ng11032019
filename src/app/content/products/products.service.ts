import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../store/reducers/products.reducers';

@Injectable()
export class ProductsService {
    public constructor(private http: HttpClient) {}

    public getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`/products`);
    }

    public getProduct(id: number): Observable<IProduct> {
        return this.http.get<IProduct>(`/products/${id}`);
    }
}
