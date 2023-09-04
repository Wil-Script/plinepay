import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationItemSkeletonComponent } from './application-item-skeleton.component';

describe('ApplicationItemSkeletonComponent', () => {
  let component: ApplicationItemSkeletonComponent;
  let fixture: ComponentFixture<ApplicationItemSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationItemSkeletonComponent]
    });
    fixture = TestBed.createComponent(ApplicationItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
