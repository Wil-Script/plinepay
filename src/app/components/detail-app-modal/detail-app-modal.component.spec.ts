import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppModalComponent } from './detail-app-modal.component';

describe('DetailAppModalComponent', () => {
  let component: DetailAppModalComponent;
  let fixture: ComponentFixture<DetailAppModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAppModalComponent]
    });
    fixture = TestBed.createComponent(DetailAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
