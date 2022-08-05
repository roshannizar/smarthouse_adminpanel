import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentUpdateComponent } from './rent-update.component';

describe('RentUpdateComponent', () => {
  let component: RentUpdateComponent;
  let fixture: ComponentFixture<RentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
