import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { Observable, of ,delay} from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

  public isTrue = false;

  public loadingData$: Observable<string[]> = of(
    ['item1', 'item2','item3']
  ).pipe(delay(3000));

}
