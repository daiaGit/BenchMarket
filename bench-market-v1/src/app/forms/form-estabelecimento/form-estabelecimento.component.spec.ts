import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstabelecimentoComponent } from './form-estabelecimento.component';

describe('FormEstabelecimentoComponent', () => {
  let component: FormEstabelecimentoComponent;
  let fixture: ComponentFixture<FormEstabelecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstabelecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
