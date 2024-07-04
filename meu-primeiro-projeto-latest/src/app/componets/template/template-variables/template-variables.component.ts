import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../../components/new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameh2!: ElementRef;
  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value)
    console.log(this.nameh2.nativeElement.innerText)
    console.log(this.childComponent.name)
  }

}
