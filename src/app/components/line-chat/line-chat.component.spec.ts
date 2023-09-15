import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChatComponent } from './line-chat.component';

describe('LineChatComponent', () => {
  let component: LineChatComponent;
  let fixture: ComponentFixture<LineChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChatComponent]
    });
    fixture = TestBed.createComponent(LineChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
