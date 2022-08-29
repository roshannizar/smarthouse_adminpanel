import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityDeleteComponent } from './utility-delete.component';

describe('UtilityDeleteComponent', () => {
  let component: UtilityDeleteComponent;
  let fixture: ComponentFixture<UtilityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
