import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-resume-card',
  templateUrl: './home-resume-card.component.html',
  styleUrls: ['./home-resume-card.component.css'],
})
export class HomeResumeCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() type = '';
  @Input() percent = 0;
}
