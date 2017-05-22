import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstabelecimentoComponent } from './login-estabelecimento.component';

describe('LoginEstabelecimentoComponent', () => {
  let component: LoginEstabelecimentoComponent;
  let fixture: ComponentFixture<LoginEstabelecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEstabelecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
