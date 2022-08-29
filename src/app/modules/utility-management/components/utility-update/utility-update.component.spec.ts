import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityUpdateComponent } from './utility-update.component';

describe('UtilityUpdateComponent', () => {
  let component: UtilityUpdateComponent;
  let fixture: ComponentFixture<UtilityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
