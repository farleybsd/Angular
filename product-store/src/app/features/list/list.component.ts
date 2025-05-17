import { Product } from './../../shared/interfaces/product.interface';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from "../../src/app/features/list/components/card/card.component";
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';
import { ConfirmationDialogServiceService } from '../../shared/services/confirmation-dialog.service.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,RouterLink,MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {


  products: Product[] = [];
  
  product = inject(ProductsService);
  router = inject(Router); 
  confirmationDialogServiceService = inject(ConfirmationDialogServiceService);

  ngOnInit(): void {
   this.product.getAll().subscribe((products) => {
    this.products = products;
    });
    
  }

  onEdit(product: Product) {
    this.router.navigate(["/edit-product", product.id]);
  }
  onDelete(product: Product) {
    this.confirmationDialogServiceService.openDialog()
                                        .pipe(filter((resposta) => resposta === true)) 
                                        .subscribe((resposta:boolean) => {
      this.product.delete(product.id).subscribe(()  => {
        this.product.getAll().subscribe((products) => {
        this.products = products;
      });
      });
    });

  }
}
