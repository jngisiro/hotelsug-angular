import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelThumbComponent } from './hotel-thumb.component';

describe('HotelThumbComponent', () => {
  let component: HotelThumbComponent;
  let fixture: ComponentFixture<HotelThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
