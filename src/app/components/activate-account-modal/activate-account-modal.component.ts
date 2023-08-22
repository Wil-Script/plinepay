import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-activate-account-modal',
  templateUrl: './activate-account-modal.component.html',
  styleUrls: ['./activate-account-modal.component.css'],
})
export class ActivateAccountModalComponent {
  
  @Output() close = new EventEmitter<string>();
  closeModal() {
    this.close.emit();
  }
}
