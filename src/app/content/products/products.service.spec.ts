import { inject, TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { CustomInterceptorService } from '../../common/services/custom-interceptor.service';
import { ProductsService } from './products.service';
import { IProduct } from '../../store/reducers/products.reducer';
import { environment } from '../../../environments/environment';

const mockedProducts: IProduct[] = [
    {
        id: 1,
        title: 'Product 1',
        img: 'https://loremflickr.com/320/240',
        price: 1200,
        author: 'Igor',
    },
    {
        id: 2,
        title: 'Product 2',
        img: 'https://loremflickr.com/320/240',
        price: 2000,
        author: 'Lena',
    },
    {
        id: 3,
        title: 'Product 3',
        img: 'https://loremflickr.com/320/240',
        price: 2200,
        author: 'Lena',
    },
    {
        id: 4,
        title: 'Product 4',
        img: 'https://loremflickr.com/320/240',
        price: 2030,
        author: 'Igor',
    },
    {
        id: 5,
        title: 'Product 5',
        img: 'https://loremflickr.com/320/240',
        price: 32,
        author: 'Vlad',
    },
    {
        id: 6,
        title: 'Product 6',
        img: 'https://loremflickr.com/320/240',
        price: 321,
        author: 'Igor',
    },
    {
        id: 7,
        title: 'Product 7',
        img: 'https://loremflickr.com/320/240',
        price: 444,
        author: 'Igor',
    },
    {
        id: 8,
        title: 'Product 8',
        img: 'https://loremflickr.com/320/240',
        price: 555,
        author: 'Igor',
    },
    {
        id: 9,
        title: 'Product 9',
        img: 'https://loremflickr.com/320/240',
        price: 55,
        author: 'Igor',
    },
    {
        id: 10,
        title: 'Product 10',
        img: 'https://loremflickr.com/320/240',
        price: 1200,
        author: 'Igor',
    },
    {
        id: 11,
        title: 'Product 11',
        img: 'https://loremflickr.com/320/240',
        price: 513,
        author: 'Igor',
    },
    {
        id: 12,
        title: 'Product 12',
        img: 'https://loremflickr.com/320/240',
        price: 245,
        author: 'Igor',
    },
    {
        id: 13,
        title: 'Product 13',
        img: 'https://loremflickr.com/320/240',
        price: 645,
        author: 'Igor',
    },
    {
        id: 14,
        title: 'Product 14',
        img: 'https://loremflickr.com/320/240',
        price: 2001,
        author: 'Igor',
    },
    {
        id: 15,
        title: 'Product 15',
        img: 'https://loremflickr.com/320/240',
        price: 3235,
        author: 'Igor',
    },
];

describe('Products service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [
                { provide: BASE_URL_TOKEN, useValue: BASE_URL },
                { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true },
                ProductsService,
            ],
        });
    });

    it('test products service', inject(
        [ProductsService, HttpTestingController],
        (productsService: ProductsService, backend: HttpTestingController) => {
            productsService.getProducts().subscribe((products: IProduct[]) => {
                expect(Array.isArray(products)).toBeTruthy();
                expect(products.length).toEqual(mockedProducts.length);
            });
            backend
                .expectOne({
                    method: 'GET',
                    url: `${environment.baseUrl}/products`,
                })
                .flush(mockedProducts);
        }
    ));
});
