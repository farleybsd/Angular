import { Product } from './../../shared/interfaces/product.interface';
import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from "../../src/app/features/list/components/card/card.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';
import { ConfirmationDialogServiceService } from '../../shared/services/confirmation-dialog.service.service';
import { NoItemsComponent } from '../../src/app/features/list/components/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,RouterLink,MatButtonModule,NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  products = signal<Product[]>(inject(ActivatedRoute).snapshot.data['products']);
  
  product = inject(ProductsService);
  router = inject(Router); 
  confirmationDialogServiceService = inject(ConfirmationDialogServiceService);

  onEdit(product: Product) {
    this.router.navigate(["/edit-product", product.id]);
  }
  onDelete(product: Product) {
    this.confirmationDialogServiceService.openDialog()
                                        .pipe(filter((resposta) => resposta === true)) 
                                        .subscribe((resposta:boolean) => {
      this.product.delete(product.id).subscribe(()  => {
        this.product.getAll().subscribe((productList) => {
        this.products.set(productList);
      });
      });
    });

  }
}
