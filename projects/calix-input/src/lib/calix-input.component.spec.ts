import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalixInputComponent } from './calix-input.component';

describe('CalixInputComponent', () => {
  let component: CalixInputComponent;
  let fixture: ComponentFixture<CalixInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalixInputComponent]
    });
    fixture = TestBed.createComponent(CalixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
