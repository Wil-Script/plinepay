import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent {

  @Input() app = {};
  @Input() name = '';
  @Input() balance= 0 ;
  @Input() percent= 0 ;
  @Input() statusApplication='';
  @Input() logoUrl= '';

  getBgColor(statusApplication:string) { 
    switch (statusApplication) {
      case 'UNDER_REVIEW':
        return '#6c757d';
      case 'DESACTIVATED':
        return 'red';
      case 'ACTIVATED':
        return 'green';
      case 'APPROVED':
        return 'green';
        default:
          return '';
    }
  }
  displayName(statusApplication:string){
    switch (statusApplication) {
      case 'UNDER_REVIEW':
        return 'en cours d\'approbtion';
      case 'DESACTIVATED':
        return 'désactivé';
      case 'ACTIVATED':
        return 'activé';
      case 'APPROVED':
        return 'approuvé';
        default:
          return '';
    }
  }
}
