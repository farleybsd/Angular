import { Component, computed, signal,effect } from '@angular/core';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
    public primeiroNome = signal('Farley');
    public lastName =  signal('Rufino');

    public fullName =  computed( () => {
      return this.primeiroNome() + ' ' + this.lastName()
     });

     public array = signal([1]);

    constructor(){
      effect(() => {
        console.log('Primeiro nome alterado para' + this.primeiroNome())
        console.log('Array' + this.array())
      })
    }

    public updateName(){
       this.primeiroNome.set('Joao')
    }

    public updateArray(){

       this.primeiroNome.update(() => {
        return'Joao' })

      this.array.update((oldvalue:Array<number>) => {
        return [...oldvalue,oldvalue.length + 1]
      })
    }
 
}
