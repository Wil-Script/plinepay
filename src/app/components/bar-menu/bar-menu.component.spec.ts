import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMenuComponent } from './bar-menu.component';

describe('BarMenuComponent', () => {
  let component: BarMenuComponent;
  let fixture: ComponentFixture<BarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarMenuComponent]
    });
    fixture = TestBed.createComponent(BarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
