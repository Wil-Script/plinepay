import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter-btn',
  templateUrl: './filter-btn.component.html',
  styleUrls: ['./filter-btn.component.css'],
})
export class FilterBtnComponent {
  @Input() label = '';
  @Input() active = false;
}
