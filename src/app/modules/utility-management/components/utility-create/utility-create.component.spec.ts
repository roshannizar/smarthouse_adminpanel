import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityCreateComponent } from './utility-create.component';

describe('UtilityCreateComponent', () => {
  let component: UtilityCreateComponent;
  let fixture: ComponentFixture<UtilityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
