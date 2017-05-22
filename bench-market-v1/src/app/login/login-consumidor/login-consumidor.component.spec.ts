import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConsumidorComponent } from './login-consumidor.component';

describe('LoginConsumidorComponent', () => {
  let component: LoginConsumidorComponent;
  let fixture: ComponentFixture<LoginConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
