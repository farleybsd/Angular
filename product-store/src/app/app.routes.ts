
import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { getProduct, getProducts } from './shared/resolvers/get-products-resolver';


export const routes: Routes = [
    {
        path: '',
        resolve: {
            products: getProducts
        },
        component:ListComponent
    },
    {
        path: 'create-product',
        loadComponent: () => import('./src/app/features/create-product/create-product.component').then((m) => m.CreateProductComponent) 
    },
    {
        path: 'edit-product/:id',
        resolve: {
           product : getProduct
        },
        loadComponent: () => import('./src/app/features/edit/edit.component').then((m) => m.EditComponent) 
    }
];


