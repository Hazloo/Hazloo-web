import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazlooConsultoriaComponent } from './hazloo-consultoria.component';

describe('HazlooConsultoriaComponent', () => {
  let component: HazlooConsultoriaComponent;
  let fixture: ComponentFixture<HazlooConsultoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazlooConsultoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazlooConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
