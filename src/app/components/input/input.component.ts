import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<string>();
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type = '';
  sendValue(value: string) {
    this.newItemEvent.emit(value);
  }
}
