import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementTousComponent } from './paiement-tous.component';

describe('PaiementTousComponent', () => {
  let component: PaiementTousComponent;
  let fixture: ComponentFixture<PaiementTousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementTousComponent]
    });
    fixture = TestBed.createComponent(PaiementTousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
