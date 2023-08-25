import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account-modal',
  templateUrl: './activate-account-modal.component.html',
  styleUrls: ['./activate-account-modal.component.css'],
})
export class ActivateAccountModalComponent {
  constructor(private router: Router) {}

  @Output() close = new EventEmitter<string>();
  closeModal() {
    this.close.emit();
  }
  goToActivation() {
    this.router.navigate(['/activation']);
  }
}
