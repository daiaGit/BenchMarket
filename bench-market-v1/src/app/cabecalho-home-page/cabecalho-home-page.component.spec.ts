import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoHomePageComponent } from './cabecalho-home-page.component';

describe('CabecalhoHomePageComponent', () => {
  let component: CabecalhoHomePageComponent;
  let fixture: ComponentFixture<CabecalhoHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
