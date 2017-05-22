import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContratanteComponent } from './form-contratante.component';

describe('FormContratanteComponent', () => {
  let component: FormContratanteComponent;
  let fixture: ComponentFixture<FormContratanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContratanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
