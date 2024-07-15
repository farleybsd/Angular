import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './componets/template/template-variables/template-variables.component';
import { TemplateControFlowComponent2  } from './componets/template/template-contro-flow/template-contro-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from "./components/signals/signals/signals.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';

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
    <app-pai-ou-mae/>
  `,
    imports: [RouterOutlet,
        NewComponent,
        TemplateBindingComponent,
        TemplateVariablesComponent,
        TemplateControFlowComponent2,
        TemplateDeferrableViewsComponent,
        SignalsComponent,
        PaiOuMaeComponent]
})
export class AppComponent {
 
}
