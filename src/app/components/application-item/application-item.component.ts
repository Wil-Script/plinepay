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
        return '#e1f5f9';
      case 'DESACTIVATED':
        return '#f9e2e1';
      case 'ACTIVATED':
        return '#d9f6e3';
      case 'APPROVED':
        return '#d9f6e3';
        default:
          return '';
    }
  }
  displayName(statusApplication:string){
    switch (statusApplication) {
      case 'UNDER_REVIEW':
        return 'En cours d\'approbtion';
      case 'DESACTIVATED':
        return 'Désactivé';
      case 'ACTIVATED':
        return 'Activé';
      case 'APPROVED':
        return 'Approuvé';
        default:
          return '';
    }
  }
}
