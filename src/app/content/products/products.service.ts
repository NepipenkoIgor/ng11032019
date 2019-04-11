import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface IProduct {
    id: number;
    title: string;
    img: string;
    price: number;
    author: string;
}

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
