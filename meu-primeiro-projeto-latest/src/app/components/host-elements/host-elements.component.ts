import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host:{
    role:'button',
    '[attr.class]' : 'class',
    //'(document:Keypress)': 'updateHostListener($event)',
  }
})
export class HostElementsComponent {

  public class = 'Vidafullstack';
  
  @HostListener('document:keydown', ['$event'])
  public updateHostListener(event:KeyboardEvent){
  console.log(event)
  }

  @HostListener('click')
  public updateclick(){
    alert('Farley Lindao')
  }
}
