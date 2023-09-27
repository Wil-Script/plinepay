import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementDetailComponent } from './paiement-detail.component';

describe('PaiementDetailComponent', () => {
  let component: PaiementDetailComponent;
  let fixture: ComponentFixture<PaiementDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementDetailComponent]
    });
    fixture = TestBed.createComponent(PaiementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
