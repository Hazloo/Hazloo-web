import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazlooRapidoComponent } from './hazloo-rapido.component';

describe('HazlooRapidoComponent', () => {
  let component: HazlooRapidoComponent;
  let fixture: ComponentFixture<HazlooRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazlooRapidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazlooRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
