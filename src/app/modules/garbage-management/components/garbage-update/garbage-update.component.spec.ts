import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageUpdateComponent } from './garbage-update.component';

describe('GarbageUpdateComponent', () => {
  let component: GarbageUpdateComponent;
  let fixture: ComponentFixture<GarbageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarbageUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
