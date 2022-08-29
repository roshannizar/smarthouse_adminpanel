import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityViewComponent } from './utility-view.component';

describe('UtilityViewComponent', () => {
  let component: UtilityViewComponent;
  let fixture: ComponentFixture<UtilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
