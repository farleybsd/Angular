import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogServiceService {

  constructor() { }
  matDialog = inject(MatDialog)
  openDialog() : Observable<boolean> {
    return  this.matDialog.open(ConfirmationDialogComponent, {
          width: '450px'
         
        }).afterClosed();
          
  }
}
