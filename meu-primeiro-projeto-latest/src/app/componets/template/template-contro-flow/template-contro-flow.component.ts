import { AsyncPipe, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-template-contro-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor,NgSwitch],
  templateUrl: './template-contro-flow.component.html',
  styleUrl: './template-contro-flow.component.scss'
})
export class TemplateControFlowComponent2 {
  public isTrue = false;
  public switchcondition = "B";
  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ]).pipe(delay(3000));

  public itens : Array<{ name: string}> = [];

  constructor() { }

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(name : string) {
    	return this.itens.push({ name: name });
  }
}
