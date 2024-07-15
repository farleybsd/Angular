import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public outputname = new EventEmitter<string>();

  public sendOutputName(){
    return this.outputname.emit("Farley Lindao");
  }

}
