import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillDeleteComponent } from './water-bill-delete.component';

describe('WaterBillDeleteComponent', () => {
  let component: WaterBillDeleteComponent;
  let fixture: ComponentFixture<WaterBillDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterBillDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBillDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
