import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudComponent } from './fraud.component';

describe('FraudComponent', () => {
  let component: FraudComponent;
  let fixture: ComponentFixture<FraudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FraudComponent]
    });
    fixture = TestBed.createComponent(FraudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
