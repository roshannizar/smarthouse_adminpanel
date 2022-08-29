import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillViewComponent } from './water-bill-view.component';

describe('WaterBillViewComponent', () => {
  let component: WaterBillViewComponent;
  let fixture: ComponentFixture<WaterBillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterBillViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
