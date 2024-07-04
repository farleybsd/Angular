import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControFlowComponent } from './template-contro-flow.component';

describe('TemplateControFlowComponent', () => {
  let component: TemplateControFlowComponent;
  let fixture: ComponentFixture<TemplateControFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateControFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
