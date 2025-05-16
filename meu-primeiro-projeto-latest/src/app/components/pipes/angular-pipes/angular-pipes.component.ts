import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { Observable, of, single, delay } from 'rxjs';

import locatePt from "@angular/common/locales/pt";
import { CustomStringPipe } from '../custom-string.pipe';
registerLocaleData(locatePt)

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,JsonPipe,AsyncPipe,CurrencyPipe,DecimalPipe,PercentPipe,CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers:[{provide: LOCALE_ID,useValue: 'pt-BR'}]
})
export class AngularPipesComponent {

    public date = signal(new Date());
    public json = signal([{name:'Farley Rufino',idade:32}])
    public loadingData$: Observable<string[]> = of(
      ['item1', 'item2','item3']
    ).pipe(delay(3000))
}
