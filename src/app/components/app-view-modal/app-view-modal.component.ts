import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-view-modal',
  templateUrl: './app-view-modal.component.html',
  styleUrls: ['./app-view-modal.component.css']
})
export class AppViewModalComponent {
  
  @Output() close = new EventEmitter<string>();

  closeModal() {
    this.close.emit();
  }
}
