import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigesComponent } from './litiges.component';

describe('LitigesComponent', () => {
  let component: LitigesComponent;
  let fixture: ComponentFixture<LitigesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitigesComponent]
    });
    fixture = TestBed.createComponent(LitigesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
