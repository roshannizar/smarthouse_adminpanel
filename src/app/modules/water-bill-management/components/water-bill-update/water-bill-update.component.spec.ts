import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillUpdateComponent } from './water-bill-update.component';

describe('WaterBillUpdateComponent', () => {
  let component: WaterBillUpdateComponent;
  let fixture: ComponentFixture<WaterBillUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterBillUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBillUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
