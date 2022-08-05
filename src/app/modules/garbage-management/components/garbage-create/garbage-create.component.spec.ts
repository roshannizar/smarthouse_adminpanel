import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageCreateComponent } from './garbage-create.component';

describe('GarbageCreateComponent', () => {
  let component: GarbageCreateComponent;
  let fixture: ComponentFixture<GarbageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarbageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
