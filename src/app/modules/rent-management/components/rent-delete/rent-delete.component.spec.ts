import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDeleteComponent } from './rent-delete.component';

describe('RentDeleteComponent', () => {
  let component: RentDeleteComponent;
  let fixture: ComponentFixture<RentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
