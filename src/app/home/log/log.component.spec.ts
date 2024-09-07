import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGComponent } from './log.component';

describe('LOGComponent', () => {
  let component: LOGComponent;
  let fixture: ComponentFixture<LOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
