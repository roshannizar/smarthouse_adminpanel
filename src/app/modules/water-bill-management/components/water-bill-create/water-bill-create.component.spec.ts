import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillCreateComponent } from './water-bill-create.component';

describe('WaterBillCreateComponent', () => {
  let component: WaterBillCreateComponent;
  let fixture: ComponentFixture<WaterBillCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterBillCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBillCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
