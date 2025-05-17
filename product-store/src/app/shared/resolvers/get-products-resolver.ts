import { inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export const getProducts = () => {
    const productService = inject(ProductsService);
    return productService.getAll();
};
export const getProduct =  (route : ActivatedRouteSnapshot) => {
const productService = inject(ProductsService);
return productService.get(route.paramMap.get('id') as string );
} 