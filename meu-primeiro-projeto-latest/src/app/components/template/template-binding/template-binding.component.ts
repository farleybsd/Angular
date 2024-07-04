import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule,NgClass,NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  public name = 'Farley';
  public age = 32;
  public isDissabled = false;
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  constructor() {
  }
  public sum(val1: number, val2: number): number {
    return val1 + val2;
  }
  public sumAge(): number {
    return this.age++;
  }
  public subAge(): number {
    return this.age--;
  }
public onKeyDown(event: Event ){
  return console.log(event)
}

public onMouseMove(event:MouseEvent ){
  return console.log({
    clietx: event.clientX,
    cliety:event.clientY
  });
}

}
