import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class ButtonComponent {
  @Output() action = new EventEmitter<string>();
  @Input() label = '';
  @Input() state = '';
  @Input() fullWidth = false;
  actionFunc() {
    this.action.emit();
  }
}
