import { Component, Input, signal } from '@angular/core';

function toUpperCase(str: string){
  return str.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  // @Input({
  //   //alias:"abacaxi"
  //   required:true,
  //   transform:toUpperCase
  // }) public inputName = 'Sem Dados';

  public name = signal("Sem Dados");

   @Input({
    //alias:"abacaxi"
    required:true,
    transform:toUpperCase
  }) set inputName(value : string) {
    this.name.set(value);
  }

}
