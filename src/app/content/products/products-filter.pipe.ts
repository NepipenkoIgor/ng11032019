import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../store/reducers/products.reducer';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    public transform(products: IProduct[], searchTerm: string): any {
        if (!searchTerm) {
            return products;
        }
        return products.filter((product: IProduct) => {
            return product.author.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
}
