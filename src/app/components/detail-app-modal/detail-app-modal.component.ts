import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-detail-app-modal',
  templateUrl: './detail-app-modal.component.html',
  styleUrls: ['./detail-app-modal.component.css'],
})
export class DetailAppModalComponent {
  @Output() close = new EventEmitter<string>();

  @Input() name = '';
  @Input() app = '';
  @Input() state = '';
  @Input() solde = 0;
  @Input() fees = false;
  @Input() img = '';
  @Input() key = '';
  @Input() percent = 0;

  closeModal() {
    this.close.emit();
  }
  keyVisibility = false;
}
