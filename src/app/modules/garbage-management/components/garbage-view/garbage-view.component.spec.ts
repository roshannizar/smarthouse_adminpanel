import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageViewComponent } from './garbage-view.component';

describe('GarbageViewComponent', () => {
  let component: GarbageViewComponent;
  let fixture: ComponentFixture<GarbageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarbageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
