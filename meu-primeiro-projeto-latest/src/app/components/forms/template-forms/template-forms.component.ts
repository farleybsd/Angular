import { CommonModule } from '@angular/common';
import {  Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css',
})
export class TemplateFormsComponent { 

  public listComidas = signal<Array<{comida: string,preco: string}>>([
    {
      comida: 'X-SALADA',preco:'R$10'
    },
    {
      comida: 'X-BACON',preco:'R$11'
    },
    {
      comida: 'COXINHA',preco:'R$6'
    }
  ])


  public submitForm(form: NgForm){
    console.log('Form',form.value)
  }
}
