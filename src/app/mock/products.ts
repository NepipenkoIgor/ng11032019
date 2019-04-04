import {of} from 'rxjs/internal/observable/of';
import {delay} from 'rxjs/operators';

export interface IProduct {
  title: string;
  img: string;
  price: number;
  author: string;
}

export const products = [
  {
    title: 'Product 1',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Igor'
  },
  {
    title: 'Product 2345',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Vlad'
  },
  {
    title: 'Product 234',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Igor'
  },
  {
    title: 'Product 111',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Igor'
  },
  {
    title: 'Product 231',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Vlad'
  },
  {
    title: 'Product 41',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Lena'
  },
  {
    title: 'Product 31',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Lena'
  },
  {
    title: 'Product 11',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Igor'
  },
  {
    title: 'Product 122',
    img: 'https://loremflickr.com/320/240',
    price: 200,
    author: 'Max'
  }
];


export const products$ = of(products)
  .pipe(delay(3000));
