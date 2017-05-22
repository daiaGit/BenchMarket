import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorCadastroComponent } from './consumidor-cadastro.component';

describe('ConsumidorCadastroComponent', () => {
  let component: ConsumidorCadastroComponent;
  let fixture: ComponentFixture<ConsumidorCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
