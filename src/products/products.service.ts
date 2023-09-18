/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    products: Product[] = []
    //db logic
    create(product: Product) {
        this.products.push(product)
        return this.products
    }
}
