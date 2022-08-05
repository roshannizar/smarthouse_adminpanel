import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCreateComponent } from './rent-create.component';

describe('RentCreateComponent', () => {
  let component: RentCreateComponent;
  let fixture: ComponentFixture<RentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
