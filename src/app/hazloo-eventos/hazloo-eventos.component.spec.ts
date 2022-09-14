import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazlooEventosComponent } from './hazloo-eventos.component';

describe('HazlooEventosComponent', () => {
  let component: HazlooEventosComponent;
  let fixture: ComponentFixture<HazlooEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazlooEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazlooEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
