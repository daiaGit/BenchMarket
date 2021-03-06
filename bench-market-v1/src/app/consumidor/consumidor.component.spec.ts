import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorComponent } from './consumidor.component';

describe('ConsumidorComponent', () => {
  let component: ConsumidorComponent;
  let fixture: ComponentFixture<ConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
