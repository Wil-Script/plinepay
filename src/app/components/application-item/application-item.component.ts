import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css'],
})
export class ApplicationItemComponent {
  @Input() app = {};
  @Input() name = '';
  @Input() balance = '';
  @Input() percent = 0;
  @Input() statusApplication = '';
  @Input() logoUrl = '';
  @Input() mode: any;

  getBgColor(mode: any) {
    switch (mode) {
      case 'TEST':
        return '#e1f5f9';
      case 'PRODUCTION':
        return '#d9f6e3';
      default:
        return '';
    }
  }
  displayName(statusApplication: string) {
    switch (statusApplication) {
      case 'UNDER_REVIEW':
        return "En cours d'approbtion";
      case 'DESACTIVATED':
        return 'Désactivé';
      case 'ACTIVATED':
        return 'Production';
      case 'APPROVED':
        return 'Approuvé';
      default:
        return '';
    }
  }
}
