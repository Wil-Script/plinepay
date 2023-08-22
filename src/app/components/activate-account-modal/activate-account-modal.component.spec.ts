import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAccountModalComponent } from './activate-account-modal.component';

describe('ActivateAccountModalComponent', () => {
  let component: ActivateAccountModalComponent;
  let fixture: ComponentFixture<ActivateAccountModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateAccountModalComponent]
    });
    fixture = TestBed.createComponent(ActivateAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
