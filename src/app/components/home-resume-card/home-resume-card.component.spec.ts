import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResumeCardComponent } from './home-resume-card.component';

describe('HomeResumeCardComponent', () => {
  let component: HomeResumeCardComponent;
  let fixture: ComponentFixture<HomeResumeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeResumeCardComponent]
    });
    fixture = TestBed.createComponent(HomeResumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
