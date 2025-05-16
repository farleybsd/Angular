
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { ProductsService } from './shared/services/products.service';
import { inject  } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component:ListComponent
    },
    {
        path: 'create-product',
        loadComponent: () => import('./src/app/features/create-product/create-product.component').then((m) => m.CreateProductComponent) 
    },
    {
        path: 'edit-product/:id',
        resolve: {
           product : (route : ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
             const productService = inject(ProductsService);
             return productService.get(route.paramMap.get('id') as string );
           } 
        },
        loadComponent: () => import('./src/app/features/edit/edit.component').then((m) => m.EditComponent) 
    }
];


