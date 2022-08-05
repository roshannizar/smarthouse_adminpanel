import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentViewComponent } from './rent-view.component';

describe('RentViewComponent', () => {
  let component: RentViewComponent;
  let fixture: ComponentFixture<RentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
