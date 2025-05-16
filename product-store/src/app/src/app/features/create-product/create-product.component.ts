
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductsService } from '../../../../shared/services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

  productService = inject(ProductsService);
  matsnackbar = inject(MatSnackBar);
  router = inject(Router);

  form = new FormGroup({ 
    title: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
    }),
  })

  onSubmit() 
  {
    this.productService.post({
      title: this.form.controls.title.value,
    }) .subscribe( () => this.matsnackbar.open('Product created!','Ok'));

    this.router.navigateByUrl('/');
  }
}
