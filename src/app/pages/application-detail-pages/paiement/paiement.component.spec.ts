import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementApplicationComponent } from './paiement.component';

describe('PaiementApplicationComponent', () => {
  let component: PaiementApplicationComponent;
  let fixture: ComponentFixture<PaiementApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementApplicationComponent]
    });
    fixture = TestBed.createComponent(PaiementApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
