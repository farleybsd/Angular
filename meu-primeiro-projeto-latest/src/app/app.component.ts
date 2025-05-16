import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './componets/template/template-variables/template-variables.component';
import { TemplateControFlowComponent2  } from './componets/template/template-contro-flow/template-contro-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from "./components/signals/signals/signals.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <!-- <router-outlet /> -->
  <!-- <app-new-component/>
  <app-template-binding/>
  <app-template-variables/>
  <h2>Control Flow </h2>
  <app-template-contro-flow/> -->
  <!-- <app-template-deferrable-views/> -->
  <!-- <app-signals> -->
    <!-- <app-pai-ou-mae/>
    <app-angular-pipes> -->
      <!-- <app-template-forms/> -->
      <!-- <app-reactive-forms/> -->
      <!-- <app-reactive-forms/> -->
      <!--<app-content>
       <header id="header">
        <p>Header</p>
      </header>
      <p text>Text</p>
      <p text>Text</p>
      <p text>Text</p>
      <footer class="footer">
          <p>Footer</p>
      </footer>
      </app-content> -->
      <!-- <app-host-elements/> -->
      @if(boolean){
        <app-life-cycle [inputmyNumber]="number()">
        <p #text>Text</p>
      </app-life-cycle>
      }

      <button (click)="boolean = !boolean">Destroy Component</button>
      
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
      
    imports: [RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControFlowComponent2,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent
  ]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
   setInterval(() => {
    this.number.update((old) =>{
      return old +1
    })
   },1000)
 }
  public number = signal(1);
  public boolean = true
}
