import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppViewModalComponent } from './app-view-modal.component';

describe('AppViewModalComponent', () => {
  let component: AppViewModalComponent;
  let fixture: ComponentFixture<AppViewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppViewModalComponent]
    });
    fixture = TestBed.createComponent(AppViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
