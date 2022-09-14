import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazlooVideoComponent } from './hazloo-video.component';

describe('HazlooVideoComponent', () => {
  let component: HazlooVideoComponent;
  let fixture: ComponentFixture<HazlooVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazlooVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HazlooVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
