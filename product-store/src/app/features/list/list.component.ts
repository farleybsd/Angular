import { Product } from './../../shared/interfaces/product.interface';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from "../../src/app/features/list/components/card/card.component";
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
  <h2 mat-dialog-title>Deletar Produto</h2>
  <mat-dialog-content>
    Tem Certeza que deseja deletar o produto?
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="onNo()">Nao</button>
    <button mat-raised-button color="accent" (click)="onYes()" cdkFocusInitial>Sim</button>
  </mat-dialog-actions>`,
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class ConfirmationDialogComponent {
  //constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  matDialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);

  onNo(){
    this.matDialogRef.close(false);
  }
  onYes(){
    this.matDialogRef.close(true);
  }
}


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
  matDialog = inject(MatDialog)

  ngOnInit(): void {
   this.product.getAll().subscribe((products) => {
    this.products = products;
    });
    
  }

  onEdit(product: Product) {
    this.router.navigate(["/edit-product", product.id]);
  }
  onDelete(product: Product) {
    this.matDialog.open(ConfirmationDialogComponent, {
      width: '450px'
     
    }).afterClosed()
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
